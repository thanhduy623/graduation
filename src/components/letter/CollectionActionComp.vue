<template>
  <footer class="collection-photofooter">
    <!-- Decorative line -->

    <div class="collection-photoline"></div>

    <!-- Description -->

    <p>Những kỷ niệm đẹp luôn xứng đáng được lưu giữ.</p>

    <!-- Collection actions -->

    <div class="collection-photobuttons">
      <button type="button" class="collection-photocard" @click="goToCollection('before')">
        <span class="collection-photocard-number">01</span>

        <span class="collection-photocard-icon">✦</span>

        <span class="collection-photocard-title">
          Trước Lễ<br />
          (Cá nhân)
        </span>

        <span class="collection-photocard-arrow">↗</span>
      </button>

      <button type="button" class="collection-photocard" @click="goToCollection('friends')">
        <span class="collection-photocard-number">02</span>

        <span class="collection-photocard-icon">♢</span>

        <span class="collection-photocard-title">
          Sau Lễ<br />
          (Bạn Bè)
        </span>

        <span class="collection-photocard-arrow">↗</span>
      </button>

      <button type="button" class="collection-photocard" @click="goToCollection('family')">
        <span class="collection-photocard-number">03</span>

        <span class="collection-photocard-icon">♡</span>

        <span class="collection-photocard-title">
          Sau Lễ<br />
          (Gia Đình)
        </span>

        <span class="collection-photocard-arrow">↗</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCollection = (type) => {
  router.push({
    name: 'collection',
    query: { type },
  })
}
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
  max-width: 280px;

  margin: 0 0 24px;

  color: #64748b;

  font-family: var(--font-serif), Georgia, serif;

  font-size: 13px;
  font-style: italic;

  line-height: 1.7;
}

/* =====================================================
   BUTTONS
===================================================== */

.collection-photobuttons {
  width: 100%;
  max-width: 560px;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin: 0 auto;
}

/* =====================================================
   CARD
===================================================== */

.collection-photocard {
  position: relative;

  min-width: 0;
  aspect-ratio: 1 / 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 18px 12px;

  box-sizing: border-box;

  border: 1px solid rgba(212, 175, 55, 0.28);
  border-radius: 18px;

  color: #d4af37;

  background:
    radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.1), transparent 45%),
    linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(4, 8, 20, 0.92));

  font-family: inherit;

  cursor: pointer;

  overflow: hidden;

  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

/* =====================================================
   INNER BORDER
===================================================== */

.collection-photocard::before {
  content: '';

  position: absolute;
  inset: 0;

  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: inherit;

  pointer-events: none;
}

/* =====================================================
   GLOW
===================================================== */

.collection-photocard::after {
  content: '';

  position: absolute;

  width: 80px;
  height: 80px;

  top: 50%;
  left: 50%;

  border-radius: 50%;

  background: rgba(212, 175, 55, 0.08);

  filter: blur(25px);

  opacity: 0;

  transform: translate(-50%, -50%);

  transition: opacity 0.4s ease;

  pointer-events: none;
}

.collection-photocard:hover {
  transform: translateY(-6px);

  border-color: rgba(212, 175, 55, 0.7);

  background:
    radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.16), transparent 50%),
    linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(4, 8, 20, 0.96));

  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.3),
    0 0 25px rgba(212, 175, 55, 0.08);
}

.collection-photocard:hover::after {
  opacity: 1;
}

/* =====================================================
   NUMBER
===================================================== */

.collection-photocard-number {
  position: absolute;

  top: 12px;
  left: 13px;

  color: rgba(200, 169, 81, 0.5);

  font-size: 8px;
  font-weight: 700;

  line-height: 1;

  letter-spacing: 0.12em;
}

/* =====================================================
   ICON
===================================================== */

.collection-photocard-icon {
  position: relative;
  z-index: 2;

  margin-bottom: 12px;

  color: #d4af37;

  font-family: Georgia, serif;

  font-size: 20px;

  line-height: 1;

  text-shadow: 0 0 14px rgba(212, 175, 55, 0.35);

  transition:
    transform 0.4s ease,
    color 0.3s ease;
}

.collection-photocard:hover .collection-photocard-icon {
  color: #f0d878;

  transform: scale(1.12);
}

/* =====================================================
   TITLE
===================================================== */

.collection-photocard-title {
  position: relative;
  z-index: 2;

  color: #e2e8f0;

  font-family: var(--font-serif), Georgia, serif;

  font-size: 12px;
  font-weight: 500;

  line-height: 1.45;

  text-align: center;

  transition: color 0.3s ease;
}

.collection-photocard:hover .collection-photocard-title {
  color: #fff;
}

/* =====================================================
   ARROW
===================================================== */

.collection-photocard-arrow {
  position: absolute;

  right: 12px;
  bottom: 11px;

  color: rgba(200, 169, 81, 0.55);

  font-size: 14px;

  line-height: 1;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.collection-photocard:hover .collection-photocard-arrow {
  color: #d4af37;

  transform: translate(2px, -2px);
}

/* =====================================================
   TABLET
===================================================== */

@media (min-width: 640px) {
  .collection-photobuttons {
    max-width: 350px;

    gap: 16px;
  }

  .collection-photocard {
    border-radius: 20px;
  }

  .collection-photocard-title {
    font-size: 13px;
  }

  .collection-photocard-icon {
    font-size: 22px;
  }
}

/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 480px) {
  .collection-photofooter p {
    margin-bottom: 20px;

    font-size: 12px;
  }

  .collection-photobuttons {
    max-width: 300px;

    gap: 9px;
  }

  .collection-photocard {
    padding: 14px 7px;

    border-radius: 14px;
  }

  .collection-photocard-number {
    top: 9px;
    left: 9px;

    font-size: 7px;
  }

  .collection-photocard-icon {
    margin-bottom: 9px;

    font-size: 16px;
  }

  .collection-photocard-title {
    font-size: 9.5px;

    line-height: 1.4;
  }

  .collection-photocard-arrow {
    right: 8px;
    bottom: 8px;

    font-size: 11px;
  }
}

/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 360px) {
  .collection-photobuttons {
    gap: 6px;
  }

  .collection-photocard {
    padding-inline: 5px;

    border-radius: 12px;
  }

  .collection-photocard-number {
    top: 7px;
    left: 7px;
  }

  .collection-photocard-icon {
    font-size: 14px;
  }

  .collection-photocard-title {
    font-size: 8.5px;
  }

  .collection-photocard-arrow {
    right: 7px;
    bottom: 7px;

    font-size: 10px;
  }
}

/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {
  .collection-photocard,
  .collection-photocard-icon,
  .collection-photocard-arrow {
    transition: none;
  }
}
</style>
