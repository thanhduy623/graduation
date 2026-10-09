<template>
  <form class="confirm-form" @submit.prevent="handleSubmit">
    <!-- NAME -->

    <div class="form-field">
      <label for="guest-name" class="form-label"> Người gửi </label>

      <input
        id="guest-name"
        v-model="form.name"
        type="text"
        class="form-input capitalize"
        readonly
      />
    </div>

    <!-- PARTICIPATION -->

    <div class="form-field">
      <label for="guest-participation" class="form-label"> Tham gia </label>

      <select id="guest-participation" v-model="form.participation" class="form-select">
        <option value="" disabled>Chọn câu trả lời của bạn</option>

        <option v-for="option in participationOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <!-- MESSAGE -->

    <div class="form-field">
      <label for="guest-message" class="form-label">
        Lời nhắn
        <span class="form-label-optional">(không bắt buộc)</span>
      </label>

      <textarea
        id="guest-message"
        v-model="form.message"
        class="form-textarea"
        rows="4"
        maxlength="500"
        placeholder="Bạn có điều gì muốn nhắn nhủ để mình tiếp đón chu đáo hơn không?"
      ></textarea>
    </div>

    <!-- SUBMIT -->

    <button type="submit" class="submit-button" :disabled="isSubmitting || !form.participation">
      <span v-if="isSubmitting">Đang gửi...</span>
      <span v-else>Gửi xác nhận</span>
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

import { useGuest } from '@/composables/useGuest'
import { apiService } from '@/services/api'

const { getCurrentGuest } = useGuest()

const guest = getCurrentGuest()

const isSubmitting = ref(false)

const participationOptions = [
  'Chắc chắn tham gia nhé!',
  'Để sắp xếp rồi báo sau nha!',
  'Hôm đó kẹt lịch mất rồi!',
]

const form = reactive({
  name: guest.name,
  participation: '',
  message: '',
})

const handleSubmit = async () => {
  if (!guest) {
    console.error('[RSVP] Không tìm thấy guest.')
    return
  }

  if (!form.participation) {
    console.warn('[RSVP] Chưa chọn trạng thái tham gia.')
    return
  }

  if (isSubmitting.value) {
    return
  }

  isSubmitting.value = true

  const payload = {
    id: guest.id,
    name: form.name,
    confirm: form.participation,
    message: form.message.trim(),
  }

  console.log('[RSVP] Bắt đầu gửi...')
  console.log('[RSVP] Payload:', payload)

  try {
    const result = await apiService.submitRSVP(payload)

    console.log('[RSVP] API response:', result)

    if (result?.success) {
      console.log('[RSVP] Gửi thành công.')

      form.message = ''
    } else {
      console.error('[RSVP] Backend trả về lỗi:', result)
    }
  } catch (error) {
    console.error('[RSVP] Lỗi submit:', error)
  } finally {
    isSubmitting.value = false
    console.log('[RSVP] Kết thúc request.')
  }
}
</script>

<style scoped>
/* =========================================================
   FORM
========================================================= */

.confirm-form {
  margin-top: 42px;
}

.form-field {
  margin: 0 0 28px;
  padding: 0;

  border: 0;
}

.form-label {
  display: block;

  margin-bottom: 10px;

  color: var(--color-gold-400);

  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;

  letter-spacing: 0.16em;

  text-transform: uppercase;

  text-align: start;
}

.form-label-optional {
  color: var(--color-slate-500);

  font-size: 9px;
  font-weight: 400;

  letter-spacing: 0;
  text-transform: none;
}

/* =========================================================
   INPUT
========================================================= */

.form-input,
.form-textarea {
  width: 100%;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  color: var(--color-slate-100);

  background: var(--color-surface-soft);

  outline: none;

  transition:
    border-color var(--duration-normal) ease,
    background-color var(--duration-normal) ease,
    box-shadow var(--duration-normal) ease;
}

.form-input {
  height: 48px;

  padding: 0 16px;

  font-family: var(--font-serif);
  font-size: 17px;
}

.form-textarea {
  min-height: 112px;

  padding: 13px 16px;

  font-family: var(--font-serif);
  font-size: 16px;

  line-height: 1.6;

  resize: none;
}

.form-textarea::placeholder {
  color: var(--color-text-placeholder);
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-gold-border-strong);

  background: var(--color-gold-surface);

  box-shadow: 0 0 0 3px var(--color-gold-glow);
}

/* =========================================================
   SELECT
========================================================= */

.form-select {
  width: 100%;
  height: 48px;

  padding: 0 42px 0 16px;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);

  color: var(--color-slate-200);

  background-color: var(--color-surface-soft);

  font-family: var(--font-serif);
  font-size: 15px;
  line-height: 1.4;

  outline: none;

  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;

  background-image:
    linear-gradient(45deg, transparent 50%, var(--color-gold-400) 50%),
    linear-gradient(135deg, var(--color-gold-400) 50%, transparent 50%);

  background-position:
    calc(100% - 18px) 20px,
    calc(100% - 13px) 20px;

  background-size:
    5px 5px,
    5px 5px;

  background-repeat: no-repeat;

  transition:
    border-color var(--duration-normal) ease,
    background-color var(--duration-normal) ease,
    box-shadow var(--duration-normal) ease;
}

.form-select:hover {
  border-color: var(--color-border-hover);

  background-color: var(--color-surface-hover);
}

.form-select:focus {
  border-color: var(--color-gold-border-strong);

  background-color: var(--color-gold-surface);

  box-shadow: 0 0 0 3px var(--color-gold-glow);
}

.form-select option {
  color: var(--color-slate-900);

  background: var(--color-white);

  font-family: var(--font-sans);
  font-size: 14px;
}

/* =========================================================
   SUBMIT
========================================================= */

.submit-button {
  width: 100%;
  height: 48px;

  margin-top: 4px;

  border: 1px solid var(--color-gold-border-strong);
  border-radius: var(--radius-md);

  color: var(--color-navy-950);

  background: var(--gradient-gold);

  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  cursor: pointer;

  box-shadow: var(--shadow-gold);

  transition:
    opacity var(--duration-normal) ease,
    transform var(--duration-normal) var(--ease-smooth),
    box-shadow var(--duration-normal) ease;
}

.submit-button:hover:not(:disabled) {
  box-shadow:
    0 14px 40px rgba(212, 175, 55, 0.2),
    0 0 24px rgba(212, 175, 55, 0.08);

  transform: translateY(-1px);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.35;

  cursor: not-allowed;

  box-shadow: none;
}

/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .confirm-form * {
    transition: none !important;
    animation: none !important;
  }
}
</style>
