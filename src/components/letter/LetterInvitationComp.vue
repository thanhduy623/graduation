<template>
  <div v-if="guest" class="invitation-body">
    <p class="invitation-opening">Thân mời</p>

    <p class="invitation-name capitalize">
      <span v-show="guest.show">{{ guest.salutation }}</span>
      {{ guest.name }}
    </p>

    <p class="invitation-text italic">
      <span>đến tham dự buổi</span>
      <span> Lễ tốt nghiệp của </span>
      <span> {{ guest.pronoun }} </span>
    </p>
  </div>

  <div v-else class="invitation-empty">
    <p>Không tìm thấy thông tin khách mời.</p>
  </div>
</template>

<script setup>
import { useGuest } from '@/composables/useGuest'

const { getCurrentGuest } = useGuest()

const guest = getCurrentGuest()
</script>

<style scoped>
/* =========================================================
   BODY
========================================================= */

.invitation-body {
  width: 100%;

  margin-top: 56px;
}

/* =========================================================
   OPENING
========================================================= */

.invitation-opening {
  color: var(--color-slate-300);

  font-family: var(--font-signature);

  font-size: 36px;
  font-weight: 600;

  line-height: 38px;

  text-align: center;
}

/* =========================================================
   GUEST NAME
========================================================= */

.invitation-name {
  width: 100%;

  margin-top: 10px;

  /*
   * Metallic Gold
   * Ánh vàng sáng ở giữa, vàng champagne ở hai đầu.
   */
  background: linear-gradient(
    105deg,
    #8f6c2c 0%,
    #c59b45 16%,
    #f3d982 32%,
    #fff3b0 45%,
    #d4af37 58%,
    #f5df8a 74%,
    #b48a3c 88%,
    #806128 100%
  );

  background-size: 200% auto;
  background-position: 0% 50%;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: var(--font-serif);
  font-size: 44px;
  font-weight: 1000;

  letter-spacing: 0.8px;
  line-height: 50px;

  text-align: center;

  text-wrap: balance;

  /*
   * Glow rất nhẹ để chữ tách khỏi nền navy.
   */
  filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.18))
    drop-shadow(0 0 18px rgba(212, 175, 55, 0.08));

  animation: invitationNameShimmer 7s ease-in-out infinite;
}

/* =========================================================
   METALLIC GOLD SHIMMER
========================================================= */

@keyframes invitationNameShimmer {
  0% {
    background-position: 0% 50%;

    filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.16))
      drop-shadow(0 0 18px rgba(212, 175, 55, 0.06));
  }

  50% {
    background-position: 100% 50%;

    filter: drop-shadow(0 0 7px rgba(243, 217, 130, 0.24))
      drop-shadow(0 0 24px rgba(212, 175, 55, 0.1));
  }

  100% {
    background-position: 0% 50%;

    filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.16))
      drop-shadow(0 0 18px rgba(212, 175, 55, 0.06));
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .invitation-name {
    animation: none;
    background-position: 50% 50%;
  }
}

/* =========================================================
   INVITATION DESCRIPTION
========================================================= */

.invitation-text {
  width: 400px;
  max-width: 100%;

  margin: 18px auto 0;

  color: var(--color-slate-300);

  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 400;

  line-height: 34px;

  text-align: center;

  text-wrap: balance;
}

/* =========================================================
   EMPTY STATE
========================================================= */

.invitation-empty {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 240px;

  color: var(--color-text-muted);

  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;

  line-height: 28px;

  text-align: center;
}
</style>
