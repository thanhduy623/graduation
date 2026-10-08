<template>
  <header class="personal-note-header">
    <p class="personal-note-eyebrow">A NOTE FROM MY HEART</p>

    <h2 id="personal-note-title" class="personal-note-title">Một thoáng nhìn lại</h2>

    <HorizontalHeaderOrnamentComp />
  </header>
</template>

<script setup>
import HorizontalHeaderOrnamentComp from '@/components/common/HorizontalHeaderOrnamentComp.vue'
</script>

<style scoped>
/* =========================================================
   HEADER
========================================================= */

.personal-note-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personal-note-eyebrow {
  margin: 0;

  color: var(--color-slate-300);

  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 600;

  letter-spacing: 0.28em;
  line-height: 14px;

  text-transform: uppercase;
}

.personal-note-title {
  margin: 12px 0 0;

  color: var(--color-gold-400);

  font-family: var(--font-signature);
  font-size: 42px;
  font-weight: 400;

  line-height: 42px;
}
</style>
