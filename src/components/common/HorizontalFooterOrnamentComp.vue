<template>
  <div class="horizontal-footer-ornament-comp" aria-hidden="true">
    <span></span>
    <i></i>
    <span></span>
  </div>
</template>

<style>
.horizontal-footer-ornament-comp {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px 0;
  gap: 9px;
}

.horizontal-footer-ornament-comp span {
  width: 48px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--color-gold-border));
}

.horizontal-footer-ornament-comp span:last-child {
  background: linear-gradient(90deg, var(--color-gold-border), transparent);
}

.horizontal-footer-ornament-comp i {
  width: 6px;
  height: 6px;

  border: 1px solid var(--color-gold-400);

  transform: rotate(45deg);

  box-shadow: 0 0 8px rgba(212, 175, 55, 0.2);
}
</style>
