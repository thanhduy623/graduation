<template>
  <header class="collection-photoheader">
    <h2 class="collection-phototitle">Hành trình <em>Rực rỡ</em></h2>
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

  color: #f8fafc;

  font-family: var(--font-serif), Georgia, serif;

  font-size: clamp(32px, 7vw, 48px);
  font-weight: 500;

  line-height: 1.12;

  letter-spacing: -0.02em;
}

.collection-phototitle em {
  display: block;

  margin-top: 4px;

  color: #d4af37;

  font-family: var(--font-script), cursive;

  font-size: 1.12em;
  font-weight: 400;

  line-height: 1.1;

  text-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
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
