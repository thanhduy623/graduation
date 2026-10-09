<template>
  <footer class="collection-photofooter">
    <!-- Decorative line -->
    <div class="collection-photoline"></div>

    <!-- Description -->
    <p>Những kỷ niệm đẹp luôn xứng đáng được lưu giữ.</p>

    <!-- Collection action -->
    <div class="collection-photobuttons">
      <a href="#" class="collection-photobutton">
        BỘ SƯU TẬP ẢNH<br />
        <span class="collection-photobutton-sub">(Cập nhật sau lễ tốt nghiệp)</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
// Không cần router khi chuyển hướng tạm thời đến #
</script>

<style scoped>
/* =====================================================
   FOOTER
===================================================== */

.collection-photofooter {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

/* =====================================================
   LINE
===================================================== */

.collection-photoline {
  width: 70px;
  height: 1px;
  margin-bottom: 18px;
  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.7), transparent);
}

/* =====================================================
   DESCRIPTION
===================================================== */

.collection-photofooter p {
  max-width: 100%;
  margin: 0 0 24px;
  font-family: var(--font-serif), Georgia, serif;
  font-size: 16px;
  font-style: italic;
  line-height: 1.7;
}

/* =====================================================
   BUTTON CONTAINER
===================================================== */

.collection-photobuttons {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

/* =====================================================
   GOLD BUTTON
===================================================== */

.collection-photobutton {
  display: block;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;

  background-color: #d4af37;
  color: #0f172a;

  border-radius: 8px;
  text-decoration: none;
  text-align: center;

  font-family: var(--font-sans), sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.collection-photobutton:hover {
  background-color: #f0d878;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.collection-photobutton-sub {
  font-size: 12px;
  font-weight: 400;
  opacity: 0.85;
}

/* =====================================================
   MOBILE RESPONSIVE
===================================================== */

@media (max-width: 480px) {
  .collection-photobuttons {
    max-width: 280px;
  }

  .collection-photobutton {
    padding: 10px 16px;
    font-size: 13px;
  }

  .collection-photobutton-sub {
    font-size: 11px;
  }
}

/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {
  .collection-photobutton {
    transition: none;
  }
}
</style>
