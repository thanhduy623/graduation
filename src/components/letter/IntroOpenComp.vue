<template>
  <div class="intro-viewport-container" @click="handleScreenClick">
    <!-- Comp 1: Video player nằm ở lớp dưới cùng -->
    <div class="intro-video-wrapper">
      <video
        ref="videoRef"
        class="intro-video"
        src="@/assets/video/intro.mp4"
        playsinline
        webkit-playsinline
        muted
        @ended="handleVideoEnded"
      ></video>
    </div>

    <!-- Comp 2: Lớp phủ ban đầu (Hiển thị khi chưa chạm lần 1) -->
    <div v-if="!hasStarted" class="intro-overlay prompt-overlay">
      <div class="instruction-text">Chạm màn hình để mở thư</div>
    </div>

    <!-- Comp 3: Lớp phủ bỏ qua (Hiển thị khi video đang chạy) -->
    <div v-if="hasStarted && isPlaying" class="intro-overlay skip-overlay">
      <div class="instruction-text">Chạm màn hình để bỏ qua</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['complete'])
const videoRef = ref(null)

const hasStarted = ref(false)
const isPlaying = ref(false)

const handleScreenClick = () => {
  if (!hasStarted.value) {
    // Lần chạm đầu tiên: Bắt đầu phát video và chuyển sang hiển thị Comp 3 thay cho Comp 2
    hasStarted.value = true
    isPlaying.value = true
    if (videoRef.value) {
      videoRef.value.play().catch((err) => {
        console.error('Không thể phát video:', err)
      })
    }
  } else if (isPlaying.value) {
    // Lần chạm thứ hai (khi video đang chạy): Ẩn ngay lập tức và hiện toàn bộ letter
    isPlaying.value = false
    emit('complete')
  }
}

const handleVideoEnded = () => {
  isPlaying.value = false
  emit('complete')
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
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.intro-video-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
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

.prompt-overlay {
  z-index: 20;
}

.skip-overlay {
  z-index: 30;
}

.instruction-text {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-gold-400, #d4af37);
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(14px, 3.8vw, 18px);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 16px rgba(212, 175, 55, 0.5);
  animation: textBlink 1.8s ease-in-out infinite;
  white-space: nowrap;
}

@keyframes textBlink {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .intro-viewport-container {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  }
}
</style>
