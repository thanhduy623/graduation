<template>
  <footer class="thanks-footer">
    <!-- Signature -->
    <div class="thanks-signature">
      <span class="thanks-signature-line"></span>

      <p class="thanks-signature-name">Thanh Duy</p>

      <span class="thanks-signature-subtitle"> Graduation · 2026 </span>
    </div>

    <!-- Footer ornament -->
  </footer>
</template>

<style scoped>
.thanks-footer {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

/* =========================================================
   SIGNATURE
========================================================= */

.thanks-signature {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 54px;
}

.thanks-signature-line {
  width: 36px;
  height: 1px;

  margin-bottom: 13px;

  background: var(--color-gold-border-strong);
}

.thanks-signature-name {
  margin: 0;

  color: var(--color-gold-400);

  font-family: var(--font-signature);
  font-size: 30px;
  font-weight: 400;

  line-height: 1.2;
}

.thanks-signature-subtitle {
  margin-top: 7px;

  color: var(--color-slate-500);

  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 500;

  letter-spacing: 0.2em;

  text-transform: uppercase;
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .thanks-footer * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
