import { reactive } from 'vue'

const state = reactive({
  show: false,
  message: '',
  type: 'success', // 'success', 'error', 'info'
})

export function useToast() {
  const showToast = (message, type = 'success', duration = 3500) => {
    state.message = message
    state.type = type
    state.show = true

    setTimeout(() => {
      state.show = false
    }, duration)
  }

  return {
    state,
    showToast,
  }
}
