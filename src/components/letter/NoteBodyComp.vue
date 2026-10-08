<template>
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
</template>

<script setup></script>

<style scoped>
/* =========================================================
   CONTENT
========================================================= */

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

/* =========================================================
   LAST PARAGRAPH
========================================================= */

.personal-note-content p:last-child {
  color: var(--color-gold-light);

  font-style: italic;
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 480px) {
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
}

/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 360px) {
  .personal-note-content p {
    font-size: 14px;
    line-height: 1.8;
  }

  .personal-note-content p + p {
    margin-top: 25px;
  }
}
</style>
