<script setup>
import InvitationLetterComp from '@/components/InvitationLetterComp.vue'
import PersonalNoteComp from '@/components/PersonalNoteComp.vue'
import InvitationGalleryComp from '@/components/CollectionPhotoComp.vue'
import RSVPComp from '@/components/ConfirmParticipationComp.vue'
import ThankYouComp from '@/components/ThankYouComp.vue'
</script>

<template>
  <main class="letter-page">
    <InvitationLetterComp />
    <PersonalNoteComp />
    <InvitationGalleryComp />
    <RSVPComp />
    <ThankYouComp />
  </main>
</template>

<style scoped>
.letter-page {
  width: 100%;
  min-height: 100svh;
  overflow-x: hidden;
  background: #050913;
}
</style>
