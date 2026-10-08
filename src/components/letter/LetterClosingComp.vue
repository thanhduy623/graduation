<template>
  <p class="invitation-closing">
    <span>Sự hiện diện của {{ guest.salutation }}</span>
    <span> là niềm vinh dự lớn đối với {{ guest.pronoun }}</span>
  </p>

  <HorizontalHeaderOrnamentComp />
</template>

<script setup>
import HorizontalHeaderOrnamentComp from '../common/HorizontalHeaderOrnamentComp.vue'

import { useGuest } from '@/composables/useGuest'

const { getCurrentGuest } = useGuest()

const guest = getCurrentGuest()
</script>

<style scoped>
/* =========================================================
   CLOSING
========================================================= */

.invitation-closing {
  width: 410px;
  max-width: 100%;

  margin: 56px auto 0;

  color: var(--color-slate-300);

  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 400;

  font-style: italic;

  text-align: center;

  text-wrap: balance;
}

.invitation-contact {
  width: 410px;
  max-width: 100%;

  margin: 56px auto 0;

  color: var(--color-slate-300);

  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 400;

  text-align: center;

  text-wrap: balance;
}
</style>
