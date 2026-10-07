<template>
  <div class="warning-page">
    <div class="warning-card">
      <!-- Animated warning icon -->
      <div class="warning-icon">
        <div class="warning-glow"></div>

        <div class="warning-triangle">
          <span class="warning-symbol">!</span>
        </div>
      </div>

      <!-- Content -->
      <div class="warning-content">
        <h1 class="uppercase">Trang không tồn tại</h1>

        <p>
          Hệ thống không nhận diện trang đích.<br />
          Vui lòng truy cập lại đúng đường dẫn thư mời đã nhận hoặc liên hệ
          <span>Thanh Duy</span> để được hỗ trợ.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Không cần logic JavaScript
</script>

<style scoped>
/* ========================================
   PAGE
======================================== */

.warning-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;

  background: radial-gradient(circle at 50% 40%, rgba(239, 68, 68, 0.08), transparent 35%), #020617;

  color: #fff;
  text-align: center;
  user-select: none;
  overflow: hidden;
}

/* ========================================
   CARD
======================================== */

.warning-card {
  position: relative;
  width: 100%;
  max-width: 440px;
  padding: 42px 32px 36px;

  box-sizing: border-box;

  border-radius: 24px;

  background: linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.94));

  border: 1px solid rgba(239, 68, 68, 0.25);

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.45),
    0 0 40px rgba(239, 68, 68, 0.05);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* ========================================
   WARNING ICON
======================================== */

.warning-icon {
  position: relative;

  width: 96px;
  height: 96px;

  margin: 0 auto 28px;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Glow phía sau icon */

.warning-glow {
  position: absolute;

  width: 74px;
  height: 74px;

  border-radius: 50%;

  background: rgba(239, 68, 68, 0.18);

  filter: blur(18px);

  animation: warningPulse 1.8s ease-in-out infinite;
}

/* Tam giác cảnh báo */

.warning-triangle {
  position: relative;

  width: 68px;
  height: 62px;

  display: flex;
  align-items: center;
  justify-content: center;

  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);

  background: linear-gradient(145deg, #f87171, #dc2626 55%, #991b1b);

  filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.5)) drop-shadow(0 8px 15px rgba(0, 0, 0, 0.35));

  animation: warningFloat 2s ease-in-out infinite;
}

/* Viền sáng bên trong */

.warning-triangle::before {
  content: '';

  position: absolute;

  inset: 5px;

  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);

  background: #450a0a;
}

/* Dấu ! */

.warning-symbol {
  position: relative;

  z-index: 2;

  margin-top: 10px;

  color: #fecaca;

  font-size: 34px;
  line-height: 1;
  font-weight: 900;

  text-shadow: 0 0 8px rgba(254, 202, 202, 0.7);

  animation: warningBlink 1.2s ease-in-out infinite;
}

/* ========================================
   CONTENT
======================================== */

.warning-content {
  position: relative;
  z-index: 2;
}

.warning-content h1 {
  margin: 0 0 16px;

  color: #fca5a5;

  font-size: 23px;
  line-height: 1.3;
  font-weight: 700;

  text-shadow: 0 0 20px rgba(248, 113, 113, 0.18);
}

.warning-content p {
  margin: 0;

  color: #cbd5e1;

  font-size: 14px;
  line-height: 1.8;

  font-weight: 400;
}

.warning-content p span {
  color: #fca5a5;
  font-weight: 700;
}

/* ========================================
   ANIMATIONS
======================================== */

/* Glow đập nhẹ */

@keyframes warningPulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.85);
  }

  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

/* Icon nhấp nhô */

@keyframes warningFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-5px) rotate(-2deg);
  }
}

/* Dấu ! nhấp nháy */

@keyframes warningBlink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.55;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 480px) {
  .warning-page {
    padding: 20px;
  }

  .warning-card {
    padding: 36px 24px 32px;
    border-radius: 20px;
  }

  .warning-icon {
    width: 88px;
    height: 88px;
    margin-bottom: 24px;
  }

  .warning-triangle {
    width: 62px;
    height: 57px;
  }

  .warning-symbol {
    font-size: 30px;
  }

  .warning-content h1 {
    font-size: 21px;
  }

  .warning-content p {
    font-size: 13.5px;
    line-height: 1.75;
  }
}

/* ========================================
   REDUCE MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {
  .warning-glow,
  .warning-triangle,
  .warning-symbol {
    animation: none;
  }
}
</style>
