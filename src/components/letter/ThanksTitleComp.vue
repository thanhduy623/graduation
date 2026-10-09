<template>
  <div class="thanks-title">
    <HorizontalFooterOrnamentComp />

    <div class="thanks-title-content">
      <p class="thanks-title-eyebrow">Hẹn gặp lại</p>

      <h2 id="thank-you-title" class="thanks-title-heading">Cảm ơn bạn</h2>
    </div>
  </div>
</template>

<script setup>
import HorizontalFooterOrnamentComp from '../common/HorizontalFooterOrnamentComp.vue'
</script>

<style scoped>
.thanks-title {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

/* =========================================================
   CONTENT
========================================================= */

.thanks-title-content {
  width: 100%;

  text-align: center;
}

.thanks-title-eyebrow {
  margin: 0;

  color: var(--color-gold-400);

  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;

  letter-spacing: 0.24em;
  line-height: 1.4;

  text-transform: uppercase;
}

.thanks-title-heading {
  margin: 12px 0 0;

  color: var(--color-gold-400);

  font-family: var(--font-signature);
  font-size: 42px;
  font-weight: 400;

  line-height: 42px;
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 360px) {
  .thanks-title-heading {
    font-size: 48px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .thanks-title * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
