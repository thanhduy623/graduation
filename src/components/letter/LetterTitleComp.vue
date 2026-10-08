<template>
  <header class="invitation-header">
    <h1 id="invitation-title" class="invitation-title">
      {{ event.title }}
    </h1>

    <HorizontalFooterOrnamentComp />
  </header>
</template>

<script setup>
import HorizontalFooterOrnamentComp from '@/components/common/HorizontalFooterOrnamentComp.vue'

import { EVENT_BASE } from '@/data/data'

const event = EVENT_BASE
</script>

<style scoped>
/* =========================================================
   HEADER
========================================================= */

.invitation-header {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

.invitation-title {
  width: 420px;
  max-width: 100%;

  color: var(--color-gold-400);

  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 600;

  letter-spacing: 0.4px;
  line-height: 24px;

  text-align: center;

  text-wrap: balance;
}

/* =========================================================
   HEADER ORNAMENT
========================================================= */

.invitation-ornament {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-top: 22px;

  height: 7px;
}

.invitation-ornament span {
  display: block;

  width: 34px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--color-gold-600));
}

.invitation-ornament span:last-child {
  background: linear-gradient(90deg, var(--color-gold-600), transparent);
}

.invitation-ornament i {
  display: block;

  width: 5px;
  height: 5px;

  border: 1px solid var(--color-gold-400);

  transform: rotate(45deg);
}
</style>
