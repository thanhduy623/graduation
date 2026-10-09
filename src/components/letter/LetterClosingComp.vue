<template>
  <p class="invitation-closing">
    <span>Sự hiện diện của {{ guest.salutation }} sẽ là món quà quý nhất </span>
    <span>trong ngày tốt nghiệp của {{ guest.pronoun }} !</span>
  </p>
</template>

<script setup>
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
  font-size: 16px;
  font-weight: 400;

  font-style: italic;
  text-align: center;
  text-wrap: balance;
}
</style>
