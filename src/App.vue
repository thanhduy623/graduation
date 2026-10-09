<script setup>
import AppViewport from '@/components/layout/AppViewport.vue'
import Toast from '@/components/Toast.vue'
</script>

<template>
  <div
    class="min-h-screen bg-wine-950 text-slate-100 font-sans antialiased selection:bg-gold-500 selection:text-wine-950"
  >
    <AppViewport />

    <Toast />
  </div>
</template>
