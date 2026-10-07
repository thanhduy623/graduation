<template>
  <article class="personal-note" aria-labelledby="personal-note-title">
    <!-- =========================================
         HEADER
    ========================================== -->

    <header class="personal-note-header">
      <p class="personal-note-eyebrow">A NOTE FROM MY HEART</p>

      <h2 id="personal-note-title" class="personal-note-title">Một thoáng nhìn lại</h2>

      <div class="personal-note-ornament" aria-hidden="true">
        <span></span>
        <i></i>
        <span></span>
      </div>
    </header>

    <!-- =========================================
         NOTE
    ========================================== -->

    <div class="personal-note-content">
      <p>
        Bốn năm trước, mình bước vào giảng đường với rất nhiều háo hức, một chút bỡ ngỡ, và chẳng
        thể biết được những năm tháng phía trước sẽ mang đến cho mình những gì.
      </p>

      <p>
        Có những ngày thật vui, cũng có những ngày thật mệt. Có những lần chạy deadline đến khuya,
        những lần tưởng như muốn bỏ cuộc, nhưng rồi vẫn cùng nhau đi tiếp.
      </p>

      <blockquote>
        Có những điều khi đang trải qua mình chỉ mong nó kết thúc thật nhanh. Đến khi thật sự kết
        thúc, lại chỉ muốn được quay về thêm một lần.
      </blockquote>

      <p>
        Đến hôm nay nhìn lại, mình nhận ra điều đáng nhớ nhất không phải là những bài kiểm tra hay
        những deadline, mà là những con người, những cuộc gặp gỡ và những khoảnh khắc đã làm nên một
        phần thanh xuân này.
      </p>

      <p class="personal-note-ending">
        Bốn năm khép lại, một hành trình mới bắt đầu. Cảm ơn tất cả những ai đã từng xuất hiện và
        trở thành một phần trong những năm tháng đẹp nhất ấy.
      </p>
    </div>

    <!-- =========================================
         FOOTER
    ========================================== -->

    <footer class="personal-note-footer" aria-hidden="true">
      <span></span>
      <i></i>
      <span></span>
    </footer>
  </article>
</template>

<style scoped>
/* =========================================================
   ROOT
========================================================= */

.personal-note {
  position: relative;

  width: 100%;
  max-width: 520px;

  padding: 58px 40px 64px;

  color: var(--color-text);

  text-align: center;
}

/* =========================================================
   HEADER
========================================================= */

.personal-note-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personal-note-eyebrow {
  color: var(--color-slate-300);

  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 600;

  letter-spacing: 0.28em;
  line-height: 14px;

  text-transform: uppercase;
}

.personal-note-title {
  margin-top: 12px;

  color: var(--color-gold-400);

  font-family: var(--font-signature);
  font-size: 42px;
  font-weight: 400;

  line-height: 42px;
}

.personal-note-title span {
  color: var(--color-gold-400);
}

/* =========================================================
   ORNAMENT
========================================================= */

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

/* =========================================================
   CONTENT
========================================================= */

.personal-note-content {
  margin-top: 48px;
}

.personal-note-content p {
  margin: 0 0 24px;

  color: var(--color-slate-300);

  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 400;

  letter-spacing: 0.05px;
  line-height: 1.85;

  text-align: left;
}

/* =========================================================
   QUOTE
========================================================= */

.personal-note-content blockquote {
  position: relative;

  margin: 34px 4px 36px;
  padding: 24px 20px;

  color: var(--color-gold-light);

  border-top: 1px solid var(--color-gold-border);
  border-bottom: 1px solid var(--color-gold-border);

  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.035), transparent);

  font-family: var(--font-serif);
  font-size: 19px;
  font-style: italic;
  line-height: 1.75;

  text-align: center;
}

.personal-note-content blockquote::before {
  content: '“';

  position: absolute;

  top: 2px;
  left: 4px;

  color: var(--color-gold-500);

  font-family: Georgia, serif;
  font-size: 38px;

  opacity: 0.7;
}

.personal-note-content blockquote::after {
  content: '”';

  position: absolute;

  right: 4px;
  bottom: -16px;

  color: var(--color-gold-500);

  font-family: Georgia, serif;
  font-size: 38px;

  opacity: 0.7;
}

/* =========================================================
   ENDING
========================================================= */

.personal-note-ending {
  margin-top: 30px !important;

  color: var(--color-gold-light) !important;

  font-size: 18px !important;
  font-style: italic;

  text-align: center !important;
}

/* =========================================================
   FOOTER
========================================================= */

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

/* =========================================================
   FIXED MOBILE CANVAS
========================================================= */

@media (min-width: 768px) {
  .personal-note {
    max-width: 520px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .personal-note * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
