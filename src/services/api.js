import { useToast } from '@/composables/useToast'

// Thay thế URL này bằng URL Web App sau khi bạn Deploy Google Apps Script (GAS)
const GAS_WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbzXQa-r8Ux1x8dt5cLPKsrfV0E65kcJOJNIXWbAmv8vq5iG5fweJn70xmsU258ewVj3VA/exec'

export const apiService = {
  async post(action, data = {}, showGlobalToast = true) {
    const { showToast } = useToast()
    try {
      const response = await fetch(GAS_WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({ action, data }),
      })

      const result = await response.json()

      // Nếu gọi API thất bại từ phía backend và được phép hiển thị toast
      if (!result.success && showGlobalToast) {
        showToast(result.message || 'Đã xảy ra lỗi hệ thống.', 'error')
      }

      return result
    } catch (error) {
      console.error('API Error:', error)
      const errorMsg = 'Lỗi kết nối đến máy chủ: ' + error.toString()

      if (showGlobalToast) {
        showToast(errorMsg, 'error')
      }

      return {
        success: false,
        message: errorMsg,
        data: null,
      }
    }
  },

  // 1. Dịch vụ 1: Xác nhận tham dự (RSVP) - Action: "submit-confirm"[cite: 1]
  async submitRSVP(payload, showToastResult = true) {
    const result = await this.post('submit-confirm', payload, false)
    const { showToast } = useToast()

    if (showToastResult) {
      if (result.success) {
        showToast(result.message || 'Xác nhận tham dự thành công!', 'success')
      } else {
        showToast(result.message || 'Xác nhận thất bại.', 'error')
      }
    }
    return result
  },

  // 2. Dịch vụ 2: Tải ảnh lên Google Drive - Action: "upload-photo"[cite: 1]
  async uploadPhoto(payload, showToastResult = true) {
    const result = await this.post('upload-photo', payload, false)
    const { showToast } = useToast()

    if (showToastResult) {
      if (result.success) {
        showToast(result.message || 'Lưu ảnh thành công!', 'success')
      } else {
        showToast(result.message || 'Upload ảnh thất bại.', 'error')
      }
    }
    return result
  },

  // 3. Dịch vụ 3: Xem danh sách ảnh từ Google Drive - Action: "view-photo"[cite: 1]
  async viewPhotos(showToastResult = false) {
    const result = await this.post('view-photo', {}, false)
    const { showToast } = useToast()

    if (showToastResult) {
      if (result.success) {
        showToast(result.message || 'Lấy danh sách ảnh thành công.', 'success')
      } else {
        showToast(result.message || 'Không thể lấy danh sách ảnh.', 'error')
      }
    }
    return result
  },
}
