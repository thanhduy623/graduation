<template>
  <section class="screen-section screen-section--center">
    <InvitationLetterComp />
  </section>

  <section class="screen-section screen-section--center">
    <PersonalNoteComp />
  </section>

  <section class="screen-section screen-section--center">
    <CollectionPhotoComp />
  </section>

  <section class="screen-section screen-section--center">
    <ConfirmParticipationComp />
  </section>

  <section class="screen-section screen-section--center">
    <ThankYouComp />
  </section>
</template>

<script setup>
import InvitationLetterComp from '@/components/InvitationLetterComp.vue'
import PersonalNoteComp from '@/components/PersonalNoteComp.vue'
import CollectionPhotoComp from '@/components/CollectionPhotoComp.vue'
import ConfirmParticipationComp from '@/components/ConfirmParticipationComp.vue'
import ThankYouComp from '@/components/ThankYouComp.vue'
</script>
