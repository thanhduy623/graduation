<script setup>
import { useToast } from '@/composables/useToast'

const { state } = useToast()
</script>

<template>
  <Transition
    enter-active-class="toast-enter-active"
    enter-from-class="toast-enter-from"
    enter-to-class="toast-enter-to"
    leave-active-class="toast-leave-active"
    leave-from-class="toast-leave-from"
    leave-to-class="toast-leave-to"
  >
    <div
      v-if="state.show"
      class="toast"
      :class="`toast--${state.type}`"
      role="status"
      aria-live="polite"
    >
      <!-- =========================================
           SHINE
      ========================================== -->

      <div class="toast-shine" aria-hidden="true"></div>

      <!-- =========================================
           ACCENT
      ========================================== -->

      <div class="toast-accent" aria-hidden="true"></div>

      <!-- =========================================
           ICON
      ========================================== -->

      <div class="toast-icon-wrap">
        <span class="toast-icon">
          {{ state.type === 'success' ? '✓' : state.type === 'error' ? '!' : 'i' }}
        </span>
      </div>

      <!-- =========================================
           CONTENT
      ========================================== -->

      <div class="toast-content">
        <p class="toast-title">
          {{
            state.type === 'success'
              ? 'Thành công'
              : state.type === 'error'
                ? 'Có lỗi xảy ra'
                : 'Thông báo'
          }}
        </p>

        <p class="toast-message">
          {{ state.message }}
        </p>
      </div>

      <!-- =========================================
           DECORATION
      ========================================== -->

      <div class="toast-decoration" aria-hidden="true">
        <span></span>
        <i></i>
        <span></span>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* =========================================================
   ROOT
========================================================= */

.toast {
  --toast-color: var(--color-gold-400);
  --toast-color-soft: rgba(212, 175, 55, 0.12);
  --toast-border: rgba(212, 175, 55, 0.28);
  --toast-glow: rgba(212, 175, 55, 0.12);

  position: fixed;

  z-index: 9999;

  left: 50%;
  bottom: 28px;

  display: flex;
  align-items: center;

  width: 360px;
  min-height: 72px;

  padding: 14px 18px 14px 14px;

  overflow: hidden;

  border: 1px solid var(--toast-border);
  border-radius: 18px;

  color: var(--color-slate-100);

  background: linear-gradient(135deg, rgba(20, 24, 31, 0.96), rgba(10, 14, 21, 0.94));

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.45),
    0 0 35px var(--toast-glow),
    inset 0 1px 0 rgba(255, 255, 255, 0.055);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  transform: translateX(-50%);

  isolation: isolate;
}

/* =========================================================
   ACCENT
========================================================= */

.toast-accent {
  position: absolute;

  top: 14px;
  bottom: 14px;
  left: 0;

  width: 2px;

  border-radius: 0 4px 4px 0;

  background: linear-gradient(
    180deg,
    transparent,
    var(--toast-color) 25%,
    var(--toast-color) 75%,
    transparent
  );

  box-shadow:
    0 0 8px var(--toast-color),
    0 0 18px var(--toast-color);
}

/* =========================================================
   SHINE
========================================================= */

.toast-shine {
  position: absolute;

  top: -50%;
  left: -70%;

  width: 55%;
  height: 200%;

  pointer-events: none;

  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.055), transparent);

  transform: rotate(18deg);

  animation: toast-shine 2.8s ease-out 0.15s 1;
}

/* =========================================================
   ICON
========================================================= */

.toast-icon-wrap {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  width: 40px;
  height: 40px;

  margin-right: 13px;

  border: 1px solid var(--toast-border);
  border-radius: 50%;

  background: radial-gradient(
    circle at 35% 30%,
    var(--toast-color-soft),
    rgba(255, 255, 255, 0.015) 70%
  );

  box-shadow:
    inset 0 0 15px var(--toast-color-soft),
    0 0 18px rgba(0, 0, 0, 0.15);
}

.toast-icon-wrap::before {
  content: '';

  position: absolute;

  inset: 4px;

  border: 1px solid color-mix(in srgb, var(--toast-color) 22%, transparent);

  border-radius: 50%;

  opacity: 0.6;
}

.toast-icon {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 21px;
  height: 21px;

  color: var(--toast-color);

  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 700;

  line-height: 1;

  text-shadow:
    0 0 10px var(--toast-color),
    0 0 18px var(--toast-color);
}

/* =========================================================
   CONTENT
========================================================= */

.toast-content {
  position: relative;

  min-width: 0;

  flex: 1;
}

.toast-title {
  margin: 0;

  color: var(--toast-color);

  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.16em;
  line-height: 1.3;

  text-transform: uppercase;
}

.toast-message {
  margin: 4px 0 0;

  color: var(--color-slate-200);

  font-family: var(--font-serif);
  font-size: 14px;
  font-weight: 400;

  line-height: 1.5;
}

/* =========================================================
   DECORATION
========================================================= */

.toast-decoration {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  margin-left: 12px;

  opacity: 0.65;
}

.toast-decoration span {
  width: 12px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--toast-color));
}

.toast-decoration span:last-child {
  background: linear-gradient(90deg, var(--toast-color), transparent);
}

.toast-decoration i {
  width: 4px;
  height: 4px;

  border: 1px solid var(--toast-color);

  transform: rotate(45deg);
}

/* =========================================================
   SUCCESS
========================================================= */

.toast--success {
  --toast-color: var(--color-gold-400);
  --toast-color-soft: rgba(212, 175, 55, 0.12);
  --toast-border: rgba(212, 175, 55, 0.28);
  --toast-glow: rgba(212, 175, 55, 0.12);
}

/* =========================================================
   ERROR
========================================================= */

.toast--error {
  --toast-color: #fda4af;
  --toast-color-soft: rgba(244, 63, 94, 0.1);
  --toast-border: rgba(244, 63, 94, 0.3);
  --toast-glow: rgba(244, 63, 94, 0.1);
}

/* =========================================================
   INFO
========================================================= */

.toast--info {
  --toast-color: #cbd5e1;
  --toast-color-soft: rgba(148, 163, 184, 0.1);
  --toast-border: rgba(148, 163, 184, 0.22);
  --toast-glow: rgba(148, 163, 184, 0.08);
}

/* =========================================================
   ENTER ANIMATION
========================================================= */

.toast-enter-active {
  transition:
    opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

.toast-enter-from {
  opacity: 0;

  transform: translateX(-50%) translateY(22px) scale(0.94);

  filter: blur(8px);
}

.toast-enter-to {
  opacity: 1;

  transform: translateX(-50%) translateY(0) scale(1);

  filter: blur(0);
}

/* =========================================================
   LEAVE ANIMATION
========================================================= */

.toast-leave-active {
  transition:
    opacity 240ms ease,
    transform 300ms cubic-bezier(0.4, 0, 1, 1),
    filter 240ms ease;
}

.toast-leave-from {
  opacity: 1;

  transform: translateX(-50%) translateY(0) scale(1);

  filter: blur(0);
}

.toast-leave-to {
  opacity: 0;

  transform: translateX(-50%) translateY(10px) scale(0.97);

  filter: blur(4px);
}

/* =========================================================
   SHINE ANIMATION
========================================================= */

@keyframes toast-shine {
  0% {
    left: -70%;
  }

  100% {
    left: 130%;
  }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 480px) {
  .toast {
    left: 50%;
    bottom: 20px;

    width: calc(100vw - 32px);

    min-height: 68px;

    padding: 13px 15px 13px 13px;

    border-radius: 17px;
  }

  .toast-icon-wrap {
    width: 38px;
    height: 38px;

    margin-right: 11px;
  }

  .toast-title {
    font-size: 9px;
  }

  .toast-message {
    font-size: 13px;
  }

  .toast-decoration {
    display: none;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .toast-enter-active,
  .toast-leave-active {
    transition: opacity 180ms ease;
  }

  .toast-enter-from,
  .toast-enter-to,
  .toast-leave-from,
  .toast-leave-to {
    transform: translateX(-50%);
    filter: none;
  }

  .toast-shine {
    animation: none;
  }
}
</style>
