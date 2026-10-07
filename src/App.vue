<script setup>
import AppViewport from '@/components/layout/AppViewport.vue'
import Toast from '@/components/Toast.vue'

import { useSectionScroll } from '@/composables/useSectionScroll'

useSectionScroll()
</script>

<template>
  <div
    class="min-h-screen bg-navy-950 text-slate-100 font-sans antialiased selection:bg-gold-500 selection:text-navy-950"
  >
    <AppViewport />

    <Toast />
  </div>
</template>
