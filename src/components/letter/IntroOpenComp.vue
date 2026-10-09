<template>
  <div
    class="intro-viewport-container"
    :class="{ 'is-fading-out': isFadingOut }"
    @click="handleScreenClick"
  >
    <!-- Comp 1: Video player nằm ở lớp dưới cùng -->
    <div class="intro-video-wrapper">
      <video
        ref="videoRef"
        class="intro-video"
        src="@/assets/video/intro.mp4"
        playsinline
        webkit-playsinline
        muted
        preload="auto"
        @loadeddata="handleVideoLoaded"
        @ended="handleVideoEnded"
      ></video>
    </div>

    <!-- Màn hình chờ load video nhẹ nhàng để tránh hoàn toàn chớp đen -->
    <div v-if="!isVideoReady" class="intro-overlay loading-overlay">
      <div class="loading-spinner"></div>
    </div>

    <!-- Comp 2: Lớp phủ ban đầu (Hiển thị khi chưa chạm lần 1 và video đã sẵn sàng) -->
    <Transition name="fade">
      <div v-if="isVideoReady && !hasStarted" class="intro-overlay prompt-overlay">
        <div class="instruction-text">Chạm màn hình để mở thư</div>
      </div>
    </Transition>

    <!-- Comp 3: Lớp phủ bỏ qua (Hiển thị mượt mà sau 3 giây kể từ khi phát video) -->
    <Transition name="fade">
      <div v-if="showSkipPrompt && isPlaying" class="intro-overlay skip-overlay">
        <div class="instruction-text">Chạm màn hình để bỏ qua</div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import musicSrc from '@/assets/music/Beo-dat-may-troi.mp3'

const emit = defineEmits(['complete'])
const videoRef = ref(null)

const isVideoReady = ref(false)
const hasStarted = ref(false)
const isPlaying = ref(false)
const showSkipPrompt = ref(false)
const isFadingOut = ref(false)

let globalAudio = null

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.load()
    if (videoRef.value.readyState >= 2) {
      isVideoReady.value = true
    }
  }

  if (!globalAudio) {
    globalAudio = new Audio(musicSrc)
    globalAudio.preload = 'auto'
    globalAudio.load()
  }
})

const handleVideoLoaded = () => {
  isVideoReady.value = true
}

const triggerClose = () => {
  if (isFadingOut.value) return
  isPlaying.value = false
  isFadingOut.value = true // Kích hoạt hiệu ứng CSS transition mờ dần

  // Khớp thời gian với CSS transition (0.7s) trước khi gỡ khỏi DOM
  setTimeout(() => {
    emit('complete')
  }, 700)
}

const handleScreenClick = () => {
  if (!hasStarted.value) {
    // Chạm lần 1: Đổi trạng thái để Comp 2 ẩn đi ngay lập tức mượt mà
    hasStarted.value = true
    isPlaying.value = true

    if (videoRef.value) {
      videoRef.value.play().catch((err) => {
        console.error('Không thể phát video:', err)
      })
    }

    if (globalAudio) {
      globalAudio.play().catch((err) => {
        console.error('Không thể phát audio:', err)
      })
    }

    // Sau đúng 3 giây (3000ms), Comp 3 mới hiển thị lên.
    // Trong khoảng 3 giây này, biến showSkipPrompt vẫn là false nên bấm vào sẽ không gọi triggerClose().
    setTimeout(() => {
      if (isPlaying.value) {
        showSkipPrompt.value = true
      }
    }, 3000)
  } else if (isPlaying.value && showSkipPrompt.value) {
    // Chỉ cho phép bỏ qua (out video) khi Comp 3 đã thực sự xuất hiện trên màn hình
    triggerClose()
  }
}

const handleVideoEnded = () => {
  triggerClose()
}
</script>

<style scoped>
.intro-viewport-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  max-width: 430px;
  max-height: 932px;
  margin: 0 auto;
  overflow: hidden;
  background: #0a0001;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  opacity: 1;
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Khi kích hoạt mờ dần, lớp phủ intro sẽ trong suốt dần, để lộ phần letter đã load sẵn bên dưới */
.intro-viewport-container.is-fading-out {
  opacity: 0;
  pointer-events: none;
}

.intro-video-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0a0001;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.loading-overlay {
  background: rgba(10, 0, 1, 0.9);
  z-index: 40;
  align-items: center;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-top-color: var(--color-gold-400, #d4af37);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.prompt-overlay {
  z-index: 20;
}

.skip-overlay {
  z-index: 30;
}

.instruction-text {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-gold-400, #d4af37);
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(12px, 3.2vw, 15px);
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.12em;
  text-align: center;
  text-shadow: 0 0 14px rgba(212, 175, 55, 0.45);
  animation: textBlink 2s ease-in-out infinite;
  white-space: nowrap;
}

@keyframes textBlink {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .intro-viewport-container {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  }
}
</style>
