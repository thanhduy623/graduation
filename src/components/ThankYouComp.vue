<template>
  <article class="thank-you" aria-labelledby="thank-you-title">
    <!-- =========================================
         ORNAMENT TOP
    ========================================== -->

    <div class="thank-you-ornament" aria-hidden="true">
      <span></span>
      <i></i>
      <span></span>
    </div>

    <!-- =========================================
         CONTENT
    ========================================== -->

    <div class="thank-you-content">
      <p class="thank-you-eyebrow">Hẹn gặp lại</p>

      <h2 id="thank-you-title" class="thank-you-title">Cảm ơn bạn</h2>

      <p class="thank-you-message">
        Cảm ơn vì đã dành một chút thời gian để đọc những dòng này và cùng mình nhìn lại một chặng
        đường đã qua.
      </p>

      <p class="thank-you-message thank-you-message--secondary">
        Hẹn gặp bạn trong ngày đặc biệt ấy.
      </p>
    </div>

    <!-- =========================================
         SIGNATURE
    ========================================== -->

    <div class="thank-you-signature">
      <span class="signature-line"></span>

      <p class="signature-name">Thanh Duy</p>

      <span class="signature-subtitle"> Graduation · 2026 </span>
    </div>

    <!-- =========================================
         FOOTER ORNAMENT
    ========================================== -->

    <div class="thank-you-footer" aria-hidden="true">
      <span></span>
      <span class="thank-you-diamond"></span>
      <span></span>
    </div>
  </article>
</template>

<style scoped>
/* =========================================================
   ROOT
========================================================= */

.thank-you {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 520px;

  padding: 64px 40px 72px;

  color: var(--color-text);

  text-align: center;
}

/* =========================================================
   TOP ORNAMENT
========================================================= */

.thank-you-ornament {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  margin-bottom: 52px;
}

.thank-you-ornament span {
  width: 48px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--color-gold-border));
}

.thank-you-ornament span:last-child {
  background: linear-gradient(90deg, var(--color-gold-border), transparent);
}

.thank-you-ornament i {
  width: 6px;
  height: 6px;

  border: 1px solid var(--color-gold-400);

  transform: rotate(45deg);

  box-shadow: 0 0 8px rgba(212, 175, 55, 0.2);
}

/* =========================================================
   CONTENT
========================================================= */

.thank-you-content {
  width: 100%;
}

.thank-you-eyebrow {
  margin: 0;

  color: var(--color-gold-400);

  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;

  letter-spacing: 0.24em;

  line-height: 1.4;

  text-transform: uppercase;
}

.thank-you-title {
  margin: 14px 0 0;

  color: var(--color-gold-light);

  font-family: var(--font-signature);
  font-size: 52px;
  font-weight: 400;

  line-height: 1.05;

  text-shadow: 0 0 24px rgba(212, 175, 55, 0.12);
}

.thank-you-message {
  max-width: 390px;

  margin: 30px auto 0;

  color: var(--color-slate-300);

  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 400;

  line-height: 1.8;
}

.thank-you-message--secondary {
  margin-top: 16px;

  color: var(--color-slate-400);

  font-style: italic;
}

/* =========================================================
   SIGNATURE
========================================================= */

.thank-you-signature {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 54px;
}

.signature-line {
  width: 36px;
  height: 1px;

  margin-bottom: 13px;

  background: var(--color-gold-border-strong);
}

.signature-name {
  margin: 0;

  color: var(--color-gold-400);

  font-family: var(--font-signature);
  font-size: 30px;
  font-weight: 400;

  line-height: 1.2;
}

.signature-subtitle {
  margin-top: 7px;

  color: var(--color-slate-500);

  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 500;

  letter-spacing: 0.2em;

  text-transform: uppercase;
}

/* =========================================================
   FOOTER ORNAMENT
========================================================= */

.thank-you-footer {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin-top: 58px;

  opacity: 0.75;
}

.thank-you-footer > span:first-child,
.thank-you-footer > span:last-child {
  width: 42px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--color-gold-border));
}

.thank-you-footer > span:last-child {
  background: linear-gradient(90deg, var(--color-gold-border), transparent);
}

.thank-you-diamond {
  width: 5px;
  height: 5px;

  background: var(--color-gold-500);

  transform: rotate(45deg);

  box-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
}

/* =========================================================
   FIXED MOBILE CANVAS
========================================================= */

@media (min-width: 768px) {
  .thank-you {
    max-width: 520px;
  }
}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 360px) {
  .thank-you {
    padding-inline: 24px;
  }

  .thank-you-title {
    font-size: 48px;
  }

  .thank-you-message {
    font-size: 15px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .thank-you * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
