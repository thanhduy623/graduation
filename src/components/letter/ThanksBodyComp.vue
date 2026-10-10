<template>
  <div class="thanks-body">
    <p class="thanks-body-message">
      Cảm ơn vì đã dành một chút thời gian để đọc những dòng này và cùng mình nhìn lại một chặng
      hành trình mà chính mình hoặc cũng có thể là bạn đã từng trải qua.
    </p>

    <p class="thanks-body-message thanks-body-message--secondary">
      Hẹn gặp bạn trong ngày đặc biệt ấy.
    </p>
  </div>
</template>

<style scoped>
.thanks-body {
  width: 100%;

  text-align: center;
}

.thanks-body-message {
  max-width: 390px;

  margin: 30px auto 0;

  color: var(--color-slate-300);

  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 400;

  line-height: 1.8;
}

.thanks-body-message--secondary {
  margin-top: 16px;

  color: var(--color-slate-400);

  font-style: italic;
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 360px) {
  .thanks-body-message {
    font-size: 15px;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .thanks-body * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
