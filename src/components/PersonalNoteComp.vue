<template>
  <article class="personal-note" aria-labelledby="personal-note-title">
    <!-- ========================================= HEADER ========================================== -->

    <header class="personal-note-header">
      <p class="personal-note-eyebrow">A NOTE FROM MY HEART</p>

      <h2 id="personal-note-title" class="personal-note-title">Một thoáng nhìn lại</h2>

      <div class="personal-note-ornament" aria-hidden="true">
        <span></span> <i></i> <span></span>
      </div>
    </header>

    <!-- ========================================= NOTE ========================================== -->

    <div class="personal-note-content">
      <p>
        Bốn năm trôi qua nhanh như một thoáng<br />
        Mới ngày nào còn là tân sinh viên<br />
        Mang theo bao điều chưa từng biết<br />
        Và những ước mơ còn rất xanh
      </p>

      <p>
        Có những ngày chẳng hề dễ dàng<br />
        Có những lần tưởng mình gục ngã<br />
        Nhưng rồi vẫn kiên cường bước tiếp<br />
        Để hôm nay vững vàng nhìn lại
      </p>

      <p>
        Bốn năm khép lại bằng trưởng thành<br />
        Thanh xuân ở lại cùng những người<br />
        Một hành trình mới đang chờ phía trước<br />
        Và mình sẵn sàng bước tiếp thôi
      </p>
    </div>

    <!-- ========================================= FOOTER ========================================== -->

    <footer class="personal-note-footer" aria-hidden="true">
      <span></span> <i></i> <span></span>
    </footer>
  </article>
</template>

<style scoped>
/* ========================================================= ROOT ========================================================= */

.personal-note {
  position: relative;

  width: 100%;
  max-width: 520px;

  padding: 58px 40px 64px;

  color: var(--color-text);

  text-align: center;
}

/* ========================================================= HEADER ========================================================= */

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

/* ========================================================= ORNAMENT ========================================================= */

.personal-note-ornament {
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 22px;
}

.personal-note-ornament span {
  width: 38px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--color-gold-border-strong));
}

.personal-note-ornament span:last-child {
  background: linear-gradient(90deg, var(--color-gold-border-strong), transparent);
}

.personal-note-ornament i {
  width: 5px;
  height: 5px;

  border: 1px solid var(--color-gold-400);

  transform: rotate(45deg);
}

/* ========================================================= CONTENT ========================================================= */

.personal-note-content {
  margin-top: 48px;
}

.personal-note-content p {
  margin: 0;

  color: var(--color-slate-300);

  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 400;

  letter-spacing: 0.05px;
  line-height: 1.85;

  text-align: center;
}

.personal-note-content p + p {
  margin-top: 34px;
}

/* ========================================================= LAST PARAGRAPH ========================================================= */

.personal-note-content p:last-child {
  color: var(--color-gold-light);

  font-style: italic;
}

/* ========================================================= FOOTER ========================================================= */

.personal-note-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin-top: 42px;
}

.personal-note-footer span {
  width: 38px;
  height: 1px;

  background: linear-gradient(90deg, transparent, var(--color-gold-border));
}

.personal-note-footer span:last-child {
  background: linear-gradient(90deg, var(--color-gold-border), transparent);
}

.personal-note-footer i {
  width: 5px;
  height: 5px;

  background: var(--color-gold-500);

  transform: rotate(45deg);

  box-shadow: 0 0 10px rgba(212, 175, 55, 0.35);
}

/* ========================================================= TABLET / DESKTOP ========================================================= */

@media (min-width: 768px) {
  .personal-note {
    max-width: 520px;
  }
}

/* ========================================================= MOBILE ========================================================= */

@media (max-width: 480px) {
  .personal-note {
    padding: 52px 24px 58px;
  }

  .personal-note-eyebrow {
    font-size: 8px;
    letter-spacing: 0.24em;
  }

  .personal-note-title {
    margin-top: 10px;

    font-size: 36px;
    line-height: 38px;
  }

  .personal-note-ornament {
    margin-top: 20px;
  }

  .personal-note-content {
    margin-top: 40px;
  }

  .personal-note-content p {
    font-size: 15px;
    line-height: 1.8;
  }

  .personal-note-content p + p {
    margin-top: 28px;
  }

  .personal-note-footer {
    margin-top: 36px;
  }
}

/* ========================================================= SMALL MOBILE ========================================================= */

@media (max-width: 360px) {
  .personal-note {
    padding-inline: 18px;
  }

  .personal-note-title {
    font-size: 33px;
  }

  .personal-note-content p {
    font-size: 14px;
    line-height: 1.8;
  }

  .personal-note-content p + p {
    margin-top: 25px;
  }
}

/* ========================================================= REDUCED MOTION ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .personal-note * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
