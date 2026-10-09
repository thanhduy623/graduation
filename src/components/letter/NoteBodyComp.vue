<template>
  <div class="personal-note-content">
    <p>
      Nghĩ lại cũng thấy bốn năm đại học trôi qua nhanh thật. Mới ngày nào còn lạ lẫm với mọi thứ,
      vậy mà giờ đã đến lúc mỗi đứa chuẩn bị đi một con đường riêng. Có nhiều chuyện lúc mới bắt đầu
      chẳng ai trong chúng ta nghĩ mình sẽ đi được đến hôm nay.
    </p>

    <p>
      Bốn năm này cũng đâu phải lúc nào cũng vui. Có những ngày mệt đến mức chỉ muốn bỏ cuộc, có
      những chuyện chẳng biết kể cùng ai. Rồi cũng có người đến, có người đi, có người ở lại và có
      người dần xa nhau. Mọi thứ cứ thế thay đổi, chẳng ai giữ được tất cả như lúc ban đầu.
    </p>

    <p>
      Cảm ơn vì tất cả vì đã đồng hành cùng mình trên chặng đường này. Cảm ơn những lần ngồi cạnh
      nhau, những câu chuyện chẳng đầu chẳng cuối và cả những ngày bình thường mà sau này có lẽ sẽ
      nhớ. Mai này mỗi đứa một nơi, mong rằng khi nhắc lại, chúng ta vẫn thấy vui vì đã từng có
      nhau.
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
  text-align: justify;
}

.personal-note-content p + p {
  margin-top: 34px;
}

/* =========================================================
   LAST PARAGRAPH
========================================================= */

.personal-note-content p:last-child {
  color: var(--color-gold-light);
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
