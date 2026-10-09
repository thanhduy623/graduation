<template>
  <header class="collection-photoheader">
    <h2 class="collection-phototitle">Bộ sưu tập ảnh tốt nghiệp</h2>
  </header>
</template>

<style scoped>
/* =====================================================
   HEADER
===================================================== */

.collection-photoheader {
  margin-bottom: 42px;

  text-align: center;
}

.collection-phototitle {
  margin: 0;

  color: var(--color-gold-400);
  font-family: var(--font-signature);

  font-size: clamp(32px, 7vw, 48px);
  font-size: 42px;
  font-weight: 400;

  line-height: 42px;
}

/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 480px) {
  .collection-photoheader {
    margin-bottom: 34px;
  }

  .collection-phototitle {
    font-size: 31px;
  }
}

/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 360px) {
  .collection-phototitle {
    font-size: 28px;
  }
}
</style>
