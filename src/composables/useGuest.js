import { GUEST_DATA } from '@/data/data'

const STORAGE_KEY = 'guestId'

export function useGuest() {
  /**
   * Lưu khách hiện tại.
   * Chỉ lưu ID, không lưu thông tin khách.
   */
  const setGuest = (guestId) => {
    if (!guestId) {
      sessionStorage.removeItem(STORAGE_KEY)
      return
    }

    sessionStorage.setItem(STORAGE_KEY, guestId)
  }

  /**
   * Lấy ID khách đang được lưu.
   */
  const getGuestId = () => {
    return sessionStorage.getItem(STORAGE_KEY)
  }

  /**
   * Tìm toàn bộ thông tin khách từ ID.
   */
  const getCurrentGuest = () => {
    const guestId = getGuestId()

    if (!guestId) {
      return null
    }

    return GUEST_DATA.find((guest) => guest.id === guestId) || null
  }

  /**
   * Xóa khách hiện tại.
   */
  const clearGuest = () => {
    sessionStorage.removeItem(STORAGE_KEY)
  }

  /**
   * Kiểm tra ID có tồn tại trong data hay không.
   */
  const hasGuest = (guestId) => {
    return GUEST_DATA.some((guest) => guest.id === guestId)
  }

  return {
    setGuest,
    getGuestId,
    getCurrentGuest,
    clearGuest,
    hasGuest,
  }
}
