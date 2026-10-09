<template>
  <header class="confirm-header">
    <h2 id="confirm-title" class="confirm-title">Bạn sẽ đến chứ?</h2>

    <p class="confirm-description italic">Hãy cho mình biết để tiếp đón chu đáo hơn nhé !</p>
  </header>
</template>

<script setup></script>

<style scoped>
/* =========================================================
   HEADER
========================================================= */

.confirm-header {
  text-align: center;
}

.confirm-title {
  margin-top: 12px;

  color: var(--color-gold-400);

  font-family: var(--font-signature);
  font-size: 42px;
  font-weight: 400;

  line-height: 42px;
}

.confirm-description {
  margin-top: 10px;

  color: var(--color-slate-400);

  font-family: var(--font-serif);
  font-size: 16px;

  line-height: 1.6;
}
</style>
