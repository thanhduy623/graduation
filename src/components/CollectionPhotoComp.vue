<template>
  <section class="collection-photo">
    <div class="collection-photocontainer">
      <!-- Header -->
      <div class="collection-photoheader">
        <h2 class="collection-phototitle">Hành trình <em>Rực rỡ</em></h2>
      </div>

      <!-- Photo Preview -->
      <div class="collection-photogallery">
        <div
          v-for="(photo, index) in previewPhotos"
          :key="photo.id"
          class="collection-photoitem"
          :class="{
            'collection-photoitem--featured': index === 0,
            'collection-photoitem--offset': index === 1,
          }"
        >
          <div class="collection-photoframe">
            <div class="collection-photoimage">
              <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            </div>

            <div class="collection-photoshine"></div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="collection-photofooter">
        <div class="collection-photoline"></div>

        <p>Những kỷ niệm đẹp luôn xứng đáng được lưu giữ.</p>

        <!-- Collection buttons -->
        <div class="collection-photobuttons">
          <button type="button" class="collection-photocard" @click="goToCollection('before')">
            <span class="collection-photocard-number">01</span>

            <span class="collection-photocard-icon">✦</span>

            <span class="collection-photocard-title">Trước Lễ<br />(Cá nhân)</span>

            <span class="collection-photocard-arrow">↗</span>
          </button>

          <button type="button" class="collection-photocard" @click="goToCollection('friends')">
            <span class="collection-photocard-number">02</span>

            <span class="collection-photocard-icon">♢</span>

            <span class="collection-photocard-title">Sau Lễ<br />(Bạn Bè)</span>

            <span class="collection-photocard-arrow">↗</span>
          </button>

          <button type="button" class="collection-photocard" @click="goToCollection('family')">
            <span class="collection-photocard-number">03</span>

            <span class="collection-photocard-icon">♡</span>

            <span class="collection-photocard-title">Sau Lễ<br />(Gia Đình)</span>

            <span class="collection-photocard-arrow">↗</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

// ===================================================== // IMAGE IMPORTS // =====================================================

import photo01 from '@/assets/collection/photo-01.jpg'
import photo02 from '@/assets/collection/photo-02.jpg'
import photo03 from '@/assets/collection/photo-03.jpg'

const router = useRouter()

// ===================================================== // PREVIEW PHOTOS // =====================================================

const previewPhotos = [
  { id: 'preview-01', src: photo01, alt: 'Graduation memory' },
  { id: 'preview-02', src: photo02, alt: 'Graduation memory' },
  { id: 'preview-03', src: photo03, alt: 'Graduation memory' },
]

// ===================================================== // NAVIGATION // =====================================================

const goToCollection = (type) => {
  router.push({ name: 'collection', query: { type } })
}
</script>

<style scoped>
/* ===================================================== ROOT ===================================================== */

.collection-photo {
  position: relative;
  width: 100%;
  min-height: 100svh;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  overflow: hidden;

  color: #fff;
}

/* ===================================================== CONTAINER ===================================================== */

.collection-photocontainer {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 720px;

  margin: 0 auto;
}

/* ===================================================== HEADER ===================================================== */

.collection-photoheader {
  text-align: center;

  margin-bottom: 42px;
}

.collection-phototitle {
  margin: 0;

  color: #f8fafc;

  font-family: var(--font-serif), Georgia, serif;

  font-size: clamp(32px, 7vw, 48px);
  line-height: 1.12;

  font-weight: 500;
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

/* ===================================================== GALLERY ===================================================== */

.collection-photogallery {
  position: relative;

  min-height: 300px;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  max-width: 560px;

  margin: 0 auto 42px;
}

.collection-photoitem {
  position: relative;

  height: 190px;

  transform: rotate(-2deg);

  transition:
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s ease;
}

.collection-photoitem:nth-child(2) {
  transform: rotate(2.5deg);
}

.collection-photoitem:nth-child(3) {
  transform: rotate(-1deg);
}

.collection-photoitem:hover {
  z-index: 5;

  transform: translateY(-8px) rotate(0deg);

  filter: brightness(1.08);
}

.collection-photoitem--featured {
  grid-column: span 2;

  height: 250px;

  transform: rotate(-1deg);
}

.collection-photoitem--featured:hover {
  transform: translateY(-8px) rotate(0deg);
}

/* ===================================================== PHOTO FRAME ===================================================== */

.collection-photoframe {
  position: relative;

  width: 100%;
  height: 100%;

  padding: 7px;

  box-sizing: border-box;

  background: linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(226, 232, 240, 0.85));

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(212, 175, 55, 0.2);

  overflow: hidden;
}

.collection-photoimage {
  position: relative;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9));
}

.collection-photoimage img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;

  transition:
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s ease;

  filter: saturate(0.9);
}

.collection-photoitem:hover img {
  transform: scale(1.06);

  filter: saturate(1.05);
}

.collection-photoshine {
  position: absolute;

  inset: 0;

  pointer-events: none;

  background: linear-gradient(
    120deg,
    transparent 20%,
    rgba(255, 255, 255, 0.18) 45%,
    transparent 70%
  );

  transform: translateX(-130%);

  transition: transform 0.8s ease;
}

.collection-photoitem:hover .collection-photoshine {
  transform: translateX(130%);
}

/* ===================================================== FOOTER ===================================================== */

.collection-photofooter {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}

.collection-photoline {
  width: 70px;
  height: 1px;

  margin-bottom: 18px;

  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.7), transparent);
}

.collection-photofooter p {
  margin: 0 0 24px;

  color: #64748b;

  font-family: var(--font-serif), Georgia, serif;

  font-size: 13px;
  line-height: 1.7;

  font-style: italic;
}

/* ===================================================== BUTTONS ===================================================== */

/* ===================================================== COLLECTION CARDS ===================================================== */

.collection-photobuttons {
  width: 100%;
  max-width: 560px;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin: 0 auto;
}

.collection-photocard {
  position: relative;

  aspect-ratio: 1 / 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 18px 12px;

  box-sizing: border-box;

  border: 1px solid rgba(212, 175, 55, 0.28);
  border-radius: 18px;

  background:
    radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.1), transparent 45%),
    linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(4, 8, 20, 0.92));

  color: #d4af37;

  font-family: inherit;

  cursor: pointer;

  overflow: hidden;

  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

/* Viền ánh sáng chạy bên trong */

.collection-photocard::before {
  content: '';

  position: absolute;
  inset: 0;

  border-radius: inherit;

  border: 1px solid rgba(255, 255, 255, 0.04);

  pointer-events: none;
}

/* Glow */

.collection-photocard::after {
  content: '';

  position: absolute;

  width: 80px;
  height: 80px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: rgba(212, 175, 55, 0.08);

  filter: blur(25px);

  opacity: 0;

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

/* ===================================================== CARD NUMBER ===================================================== */

.collection-photocard-number {
  position: absolute;

  top: 12px;
  left: 13px;

  color: rgba(200, 169, 81, 0.5);

  font-size: 8px;
  line-height: 1;

  font-weight: 700;

  letter-spacing: 0.12em;
}

/* ===================================================== CARD ICON ===================================================== */

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
  transform: scale(1.12);

  color: #f0d878;
}

/* ===================================================== CARD TITLE ===================================================== */

.collection-photocard-title {
  position: relative;
  z-index: 2;

  color: #e2e8f0;

  font-family: var(--font-serif), Georgia, serif;

  font-size: 12px;
  line-height: 1.45;

  font-weight: 500;

  text-align: center;

  transition: color 0.3s ease;
}

.collection-photocard:hover .collection-photocard-title {
  color: #fff;
}

/* ===================================================== CARD ARROW ===================================================== */

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

/* ===================================================== TABLET ===================================================== */

@media (min-width: 640px) {
  .collection-photobuttons {
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

/* ===================================================== MOBILE ===================================================== */

@media (max-width: 480px) {
  .collection-photobuttons {
    max-width: 330px;

    gap: 8px;
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

/* ===================================================== SMALL MOBILE ===================================================== */

@media (max-width: 360px) {
  .collection-photobuttons {
    gap: 6px;
  }

  .collection-photocard {
    border-radius: 12px;

    padding-inline: 5px;
  }

  .collection-photocard-icon {
    font-size: 14px;
  }

  .collection-photocard-title {
    font-size: 8.5px;
  }

  .collection-photocard-number {
    top: 7px;
    left: 7px;
  }

  .collection-photocard-arrow {
    right: 7px;
    bottom: 7px;

    font-size: 10px;
  }
}

/* ===================================================== REDUCE MOTION ===================================================== */

@media (prefers-reduced-motion: reduce) {
  .collection-photocard,
  .collection-photocard-icon,
  .collection-photocard-arrow {
    transition: none;
  }
}

/* ===================================================== TABLET ===================================================== */

@media (min-width: 640px) {
  .collection-photo {
    padding: 90px 32px;
  }

  .collection-photogallery {
    gap: 18px;
  }

  .collection-photoitem {
    height: 220px;
  }

  .collection-photoitem--featured {
    height: 290px;
  }

  .collection-photobuttons {
    max-width: 350px;
  }
}

/* ===================================================== MOBILE ===================================================== */

@media (max-width: 480px) {
  .collection-photo {
    min-height: auto;

    padding: 64px 18px;
  }

  .collection-photoheader {
    margin-bottom: 34px;
  }

  .collection-photoeyebrow {
    margin-bottom: 14px;

    font-size: 9px;

    letter-spacing: 0.28em;
  }

  .collection-phototitle {
    font-size: 31px;
  }

  .collection-photogallery {
    min-height: 255px;

    gap: 10px;

    margin-bottom: 36px;
  }

  .collection-photoitem {
    height: 150px;
  }

  .collection-photoitem--featured {
    height: 205px;
  }

  .collection-photoframe {
    padding: 5px;
  }

  .collection-photofooter p {
    max-width: 280px;

    margin-bottom: 20px;

    font-size: 12px;
  }

  .collection-photobuttons {
    max-width: 300px;

    gap: 9px;
  }

  .collection-photobutton {
    min-height: 42px;

    padding: 11px 15px;

    font-size: 9px;

    letter-spacing: 0.08em;
  }
}

/* ===================================================== SMALL MOBILE ===================================================== */

@media (max-width: 360px) {
  .collection-photo {
    padding-inline: 14px;
  }

  .collection-phototitle {
    font-size: 28px;
  }

  .collection-photogallery {
    min-height: 220px;
  }

  .collection-photoitem {
    height: 130px;
  }

  .collection-photoitem--featured {
    height: 180px;
  }

  .collection-photobutton {
    font-size: 8.5px;
  }
}

/* ===================================================== REDUCE MOTION ===================================================== */

@media (prefers-reduced-motion: reduce) {
  .collection-photoitem,
  .collection-photoimage img,
  .collection-photoshine,
  .collection-photobutton,
  .collection-photobutton-arrow {
    transition: none;
  }
}
</style>
