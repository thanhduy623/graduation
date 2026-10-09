<template>
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
</template>

<script setup>
import photo01 from '@/assets/collection/photo-01.jpg'
import photo02 from '@/assets/collection/photo-02.jpg'
import photo03 from '@/assets/collection/photo-03.jpg'

const previewPhotos = [
  {
    id: 'preview-01',
    src: photo01,
    alt: 'Graduation memory',
  },
  {
    id: 'preview-02',
    src: photo02,
    alt: 'Graduation memory',
  },
  {
    id: 'preview-03',
    src: photo03,
    alt: 'Graduation memory',
  },
]
</script>

<style scoped>
/* =====================================================
   GALLERY
===================================================== */

.collection-photogallery {
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px;

  max-width: 560px;

  margin: 0 auto 42px;
}

/* =====================================================
   PHOTO ITEM
===================================================== */

.collection-photoitem {
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 3;
  min-width: 0;

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

  aspect-ratio: 4 / 3;

  transform: rotate(-1deg);
}

.collection-photoitem--featured:hover {
  transform: translateY(-8px) rotate(0deg);
}

/* =====================================================
   PHOTO FRAME
===================================================== */

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

/* =====================================================
   IMAGE
===================================================== */

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
  object-position: center;

  filter: saturate(0.9);

  transition:
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s ease;
}

.collection-photoitem:hover img {
  transform: scale(1.06);

  filter: saturate(1.05);
}

/* =====================================================
   SHINE
===================================================== */

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

/* =====================================================
   TABLET
===================================================== */

@media (min-width: 640px) {
  .collection-photogallery {
    gap: 18px;
  }
}

/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 480px) {
  .collection-photogallery {
    gap: 10px;

    margin-bottom: 36px;
  }

  .collection-photoframe {
    padding: 5px;
  }
}

/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {
  .collection-photoitem,
  .collection-photoimage img,
  .collection-photoshine {
    transition: none;
  }
}
</style>
