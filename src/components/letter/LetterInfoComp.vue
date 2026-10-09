<template>
  <div class="event-info">
    <!-- Thời gian -->
    <div class="event-column">
      <p class="event-label">Thời gian</p>

      <p class="event-value event-value--large">
        {{ guest.time }}
      </p>

      <p class="event-value font-medium">
        {{ event.date }}
      </p>

      <p class="event-value italic">( {{ event.weekday }} )</p>
    </div>

    <!-- Divider -->
    <div class="event-divider" aria-hidden="true"></div>

    <!-- Địa điểm -->
    <div class="event-column">
      <p class="event-label">Địa điểm</p>

      <p class="event-value event-value--large">
        {{ guest.zone }}
      </p>

      <a href="https://maps.app.goo.gl/rDUpeLEy16sVJ1qK6" target="_blank" rel="noopener noreferrer">
        <p class="event-value">
          {{ event.venue }}
        </p>

        <p class="event-value italic">( {{ event.address }} )</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { EVENT_BASE } from '@/data/data'
import { useGuest } from '@/composables/useGuest'

const event = EVENT_BASE

const { getCurrentGuest } = useGuest()

const guest = getCurrentGuest()
</script>

<style scoped>
/* =========================================================
   EVENT INFORMATION
   ---------------------------------------------------------
   Layout:
   THỜI GIAN : ĐỊA ĐIỂM
       1     :    2

   time / zone = primary
   date / venue / address = secondary
========================================================= */

.event-info {
  position: relative;

  display: grid;

  grid-template-columns: 3fr 1px 5fr;

  width: 361px;
  padding: 16px 0;
  margin: 56px auto 0;

  align-items: stretch;
}

/* =========================================================
   ARTISTIC BORDER
========================================================= */

.event-info::before {
  content: '';

  position: absolute;

  inset: -16px -18px;

  pointer-events: none;

  border-top: 1px solid rgba(212, 175, 55, 0.28);

  border-bottom: 1px solid rgba(212, 175, 55, 0.28);

  opacity: 0.8;
}

/* =========================================================
   CORNER ORNAMENT
========================================================= */

.event-info::after {
  content: '';

  position: absolute;

  inset: -19px -21px;

  pointer-events: none;

  border-radius: 2px;

  opacity: 0.65;
}

/* =========================================================
   EVENT COLUMN
========================================================= */

.event-column {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 0;

  text-align: center;
}

/* =========================================================
   EVENT LABEL
========================================================= */

.event-label {
  width: 100%;

  margin: 0 0 13px;

  color: var(--color-gold-400);

  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 600;

  letter-spacing: 2px;
  line-height: 13px;

  text-align: center;

  text-transform: uppercase;
}

/* =========================================================
   SECONDARY EVENT VALUE
========================================================= */

.event-value {
  width: 100%;
  max-width: 210px;

  margin: 5px 0 0;

  color: var(--color-slate-300);

  font-family: var(--font-serif);

  font-size: 14px;
  font-weight: 500;

  line-height: 20px;

  text-align: center;

  text-wrap: balance;

  overflow-wrap: break-word;
}

/* =========================================================
   PRIMARY EVENT VALUE
========================================================= */

.event-value--large {
  width: 100%;

  margin: 0;

  color: var(--color-gold-light);

  font-family: var(--font-serif);

  font-size: 24px;
  font-weight: 500;

  letter-spacing: 0.3px;
  line-height: 30px;

  text-align: center;

  text-wrap: balance;

  letter-spacing: 0.5px;

  text-shadow: 0 0 18px rgba(212, 175, 55, 0.16);
}

/* =========================================================
   REMOVE OLD MUTED BEHAVIOR
========================================================= */

.event-value--muted {
  margin-top: 5px;

  color: var(--color-slate-400);

  font-family: var(--font-sans);
  font-size: 10px;

  line-height: 16px;
}

/* =========================================================
   VERTICAL ARTISTIC DIVIDER
========================================================= */

.event-divider {
  position: relative;

  width: 1px;
  min-width: 1px;

  height: 100%;

  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(212, 175, 55, 0.12) 8%,
    rgba(212, 175, 55, 0.52) 25%,
    rgba(212, 175, 55, 0.52) 75%,
    rgba(212, 175, 55, 0.12) 92%,
    transparent 100%
  );
}

/* =========================================================
   DIVIDER CENTER ORNAMENT
========================================================= */

.event-divider::after {
  content: '';

  position: absolute;

  left: 50%;
  top: 50%;

  width: 5px;
  height: 5px;

  background: var(--color-navy-950);

  border: 1px solid var(--color-gold-500);

  transform: translate(-50%, -50%) rotate(45deg);

  box-shadow: 0 0 8px rgba(212, 175, 55, 0.2);
}

/* =========================================================
   MOBILE CANVAS
========================================================= */

@media (max-width: 359px) {
  .event-info {
    transform: scale(0.94);
    transform-origin: center top;
  }
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .event-info,
  .event-info::before,
  .event-info::after,
  .event-divider,
  .event-divider::after {
    animation: none !important;
    transition: none !important;
  }
}
</style>
