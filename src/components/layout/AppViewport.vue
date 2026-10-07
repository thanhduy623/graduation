<script setup>
import { RouterView } from 'vue-router'
import AppBackground from './AppBackground.vue'
</script>

<template>
  <div class="app-shell">
    <AppBackground />

    <main class="app-viewport">
      <RouterView />
    </main>
  </div>
</template>
