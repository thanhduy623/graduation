import { createRouter, createWebHistory } from 'vue-router'
import { useGuest } from '@/composables/useGuest'

import NoInfoPage from '../views/NoInfoPage.vue'
import NotFound from '../views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'letter',
      component: () => import('../views/LetterPage.vue'),
    },

    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/CollectionPage.vue'),
    },

    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadPage.vue'),
    },

    {
      path: '/album',
      name: 'album',
      component: () => import('../views/AlbumPage.vue'),
    },

    {
      path: '/no-info',
      name: 'no-info',
      component: NoInfoPage,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

const publicPages = ['no-info', 'not-found']

router.beforeEach((to) => {
  // =====================================================
  // PUBLIC PAGES
  // =====================================================

  if (publicPages.includes(to.name)) {
    return true
  }

  const { setGuest, getGuestId, hasGuest } = useGuest()

  // =====================================================
  // 1. URL CÓ ?id
  // =====================================================

  const queryId = to.query.id

  if (queryId) {
    const guestId = String(queryId)

    // ID không tồn tại trong data.js
    if (!hasGuest(guestId)) {
      return { name: 'no-info' }
    }

    // ID hợp lệ -> chỉ lưu ID
    setGuest(guestId)

    return true
  }

  // =====================================================
  // 2. URL KHÔNG CÓ ?id
  // Kiểm tra ID đã được lưu hay chưa
  // =====================================================

  const savedGuestId = getGuestId()

  if (savedGuestId && hasGuest(savedGuestId)) {
    return true
  }

  // =====================================================
  // 3. KHÔNG CÓ ID TRÊN URL
  // + KHÔNG CÓ ID HỢP LỆ ĐÃ LƯU
  // -> NO INFO
  // =====================================================

  return { name: 'no-info' }
})

export default router
