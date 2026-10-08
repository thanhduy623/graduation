<template>
  <div class="horizontal-header-ornament-comp" aria-hidden="true">
    <span></span>
    <span class="horizontal-header-ornament-comp-diamond"></span>
    <span></span>
  </div>
</template>

<script setup></script>

<style scoped>
.horizontal-header-ornament-comp {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px 0;
  gap: 9px;
}

.horizontal-header-ornament-comp > span:first-child,
.horizontal-header-ornament-comp > span:last-child {
  display: block;

  width: 42px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--color-gold-border));
}

.horizontal-header-ornament-comp > span:last-child {
  background: linear-gradient(90deg, var(--color-gold-border), transparent);
}

.horizontal-header-ornament-comp-diamond {
  display: block;

  width: 5px;
  height: 5px;

  background: var(--color-gold-500);

  transform: rotate(45deg);

  box-shadow: 0 0 10px rgba(212, 175, 55, 0.35);
}
</style>
