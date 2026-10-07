import { onMounted, onBeforeUnmount } from 'vue'

const SECTION_SELECTOR = '.screen-section'

const WHEEL_THRESHOLD = 12
const TOUCH_THRESHOLD = 45

const SCROLL_LOCK_DURATION = 700

export function useSectionScroll() {
  let isLocked = false

  let unlockTimer = null

  let touchStartY = 0
  let touchStartX = 0

  /**
   * Lấy toàn bộ section hiện tại.
   */
  const getSections = () => {
    return Array.from(document.querySelectorAll(SECTION_SELECTOR))
  }

  /**
   * Tìm section có tâm gần tâm viewport nhất.
   */
  const getNearestSectionIndex = () => {
    const sections = getSections()

    if (!sections.length) {
      return -1
    }

    const viewportCenter = window.innerHeight / 2

    let nearestIndex = 0
    let nearestDistance = Infinity

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()

      const sectionCenter = rect.top + rect.height / 2

      const distance = Math.abs(sectionCenter - viewportCenter)

      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestIndex = index
      }
    })

    return nearestIndex
  }

  /**
   * Khóa navigation trong thời gian animation.
   */
  const lockScroll = () => {
    isLocked = true

    clearTimeout(unlockTimer)

    unlockTimer = setTimeout(() => {
      isLocked = false
    }, SCROLL_LOCK_DURATION)
  }

  /**
   * Scroll section vào đúng tâm viewport.
   */
  const scrollToSection = (index) => {
    const sections = getSections()

    if (!sections.length) {
      return
    }

    if (index < 0 || index >= sections.length) {
      return
    }

    const section = sections[index]

    const rect = section.getBoundingClientRect()

    const viewportCenter = window.innerHeight / 2

    const sectionCenter = rect.top + rect.height / 2

    const offset = sectionCenter - viewportCenter

    window.scrollTo({
      top: window.scrollY + offset,
      behavior: 'smooth',
    })

    lockScroll()
  }

  /**
   * Di chuyển theo hướng.
   *
   * direction:
   *
   * -1 = section phía trên
   *  1 = section phía dưới
   */
  const moveSection = (direction) => {
    if (isLocked) {
      return
    }

    const sections = getSections()

    if (!sections.length) {
      return
    }

    const currentIndex = getNearestSectionIndex()

    if (currentIndex === -1) {
      return
    }

    const targetIndex = currentIndex + direction

    /**
     * Không cho vượt quá đầu/cuối.
     */
    if (targetIndex < 0 || targetIndex >= sections.length) {
      return
    }

    scrollToSection(targetIndex)
  }

  /**
   * =========================================
   * DESKTOP / TRACKPAD
   * =========================================
   */
  const handleWheel = (event) => {
    if (isLocked) {
      return
    }

    if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) {
      return
    }

    const sections = getSections()

    if (!sections.length) {
      return
    }

    const currentIndex = getNearestSectionIndex()

    if (currentIndex === -1) {
      return
    }

    const direction = event.deltaY > 0 ? 1 : -1

    const targetIndex = currentIndex + direction

    /**
     * Nếu đã ở section đầu/cuối,
     * cho phép browser xử lý bình thường.
     */
    if (targetIndex < 0 || targetIndex >= sections.length) {
      return
    }

    /**
     * Chặn scroll mặc định.
     */
    event.preventDefault()

    moveSection(direction)
  }

  /**
   * =========================================
   * MOBILE TOUCH START
   * =========================================
   */
  const handleTouchStart = (event) => {
    if (!event.touches.length) {
      return
    }

    const touch = event.touches[0]

    touchStartY = touch.clientY
    touchStartX = touch.clientX
  }

  /**
   * =========================================
   * MOBILE TOUCH END
   * =========================================
   */
  const handleTouchEnd = (event) => {
    if (isLocked) {
      return
    }

    if (!event.changedTouches.length) {
      return
    }

    const touch = event.changedTouches[0]

    const deltaY = touch.clientY - touchStartY

    const deltaX = touch.clientX - touchStartX

    /**
     * Bỏ qua nếu swipe ngang
     * lớn hơn swipe dọc.
     */
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return
    }

    /**
     * Swipe quá ngắn → không xử lý.
     */
    if (Math.abs(deltaY) < TOUCH_THRESHOLD) {
      return
    }

    /**
     * Vuốt lên:
     *
     * deltaY < 0
     *
     * → section tiếp theo
     */
    if (deltaY < 0) {
      moveSection(1)
      return
    }

    /**
     * Vuốt xuống:
     *
     * deltaY > 0
     *
     * → section phía trên
     */
    if (deltaY > 0) {
      moveSection(-1)
    }
  }

  /**
   * =========================================
   * KEYBOARD
   * =========================================
   */
  const handleKeydown = (event) => {
    if (isLocked) {
      return
    }

    let direction = 0

    switch (event.key) {
      case 'ArrowDown':
      case 'PageDown':
        direction = 1
        break

      case 'ArrowUp':
      case 'PageUp':
        direction = -1
        break

      default:
        return
    }

    const sections = getSections()

    if (!sections.length) {
      return
    }

    const currentIndex = getNearestSectionIndex()

    const targetIndex = currentIndex + direction

    if (targetIndex < 0 || targetIndex >= sections.length) {
      return
    }

    event.preventDefault()

    moveSection(direction)
  }

  /**
   * =========================================
   * CLEANUP
   * =========================================
   */
  const cleanup = () => {
    window.removeEventListener('wheel', handleWheel)

    window.removeEventListener('touchstart', handleTouchStart)

    window.removeEventListener('touchend', handleTouchEnd)

    window.removeEventListener('keydown', handleKeydown)

    clearTimeout(unlockTimer)
  }

  /**
   * =========================================
   * MOUNT
   * =========================================
   */
  onMounted(() => {
    window.addEventListener('wheel', handleWheel, {
      passive: false,
    })

    window.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })

    window.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    })

    window.addEventListener('keydown', handleKeydown)
  })

  onBeforeUnmount(() => {
    cleanup()
  })

  return {
    scrollToSection,
    getNearestSectionIndex,
  }
}
