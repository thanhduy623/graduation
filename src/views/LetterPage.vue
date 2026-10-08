<template>
  <section class="screen-section screen-section--center">
    <LetterTitleComp />
    <LetterInvitationComp />
    <LetterInfoComp />
    <LetterClosingComp />
  </section>

  <section class="screen-section screen-section--center">
    <NoteTitleComp />
    <NoteBodyComp />
  </section>

  <section class="screen-section screen-section--center">
    <CollectionTitleComp />
    <CollectionFrameComp />
    <CollectionActionComp />
  </section>

  <section class="screen-section screen-section--center">
    <ConfirmTitleComp />
    <ConfirmFormComp />
  </section>

  <section class="screen-section screen-section--center">
    <ThanksTitleComp />
    <ThanksBodyComp />
    <ThanksFooterComp />
  </section>
</template>

<script setup>
import LetterTitleComp from '@/components/letter/LetterTitleComp.vue'
import LetterInvitationComp from '@/components/letter/LetterInvitationComp.vue'
import LetterInfoComp from '@/components/letter/LetterInfoComp.vue'
import LetterClosingComp from '@/components/letter/LetterClosingComp.vue'

import NoteTitleComp from '@/components/letter/NoteTitleComp.vue'
import NoteBodyComp from '@/components/letter/NoteBodyComp.vue'

import CollectionTitleComp from '@/components/letter/CollectionTitleComp.vue'
import CollectionFrameComp from '@/components/letter/CollectionFrameComp.vue'
import CollectionActionComp from '@/components/letter/CollectionActionComp.vue'

import ConfirmTitleComp from '@/components/letter/ConfirmTitleComp.vue'
import ConfirmFormComp from '@/components/letter/ConfirmFormComp.vue'

import ThanksTitleComp from '@/components/letter/ThanksTitleComp.vue'
import ThanksBodyComp from '@/components/letter/ThanksBodyComp.vue'
import ThanksFooterComp from '@/components/letter/ThanksFooterComp.vue'
</script>
