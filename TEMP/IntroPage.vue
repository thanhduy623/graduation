<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const guestName = ref('Khách Quý')
const salutation = ref('Thân mời')

onMounted(() => {
  // Lấy thông tin khách mời từ sessionStorage (đã được router guard xử lý)
  const savedGuest = sessionStorage.getItem('current_guest')
  if (savedGuest) {
    try {
      const guest = JSON.parse(savedGuest)
      guestName.value = guest.name || 'Khách Quý'
      salutation.value = guest.salutation || 'Thân mời'
    } catch (e) {
      console.error(e)
    }
  }
})

const openLetter = () => {
  // Giữ lại query id khi chuyển sang trang thư mời
  router.push({ path: '/letter', query: route.query })
}
</script>

<template>
  <div
    @click="openLetter"
    class="relative min-h-screen flex flex-col items-center justify-between p-6 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-center cursor-pointer select-none overflow-hidden"
  >
    <!-- Background glow effects -->
    <div
      class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
    ></div>

    <!-- Header info -->
    <div class="pt-8 z-10 space-y-2">
      <p class="text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">
        Lễ Tốt Nghiệp Cử Nhân
      </p>
      <h1 class="text-2xl font-serif text-slate-200">Graduation Invitation</h1>
    </div>

    <!-- Envelope / Card Centerpiece -->
    <div class="my-auto z-10 w-full max-w-sm py-10 flex flex-col items-center">
      <div
        class="relative w-64 h-96 bg-gradient-to-br from-slate-900 to-navy-900 border border-gold-500/30 rounded-xl shadow-2xl p-6 flex flex-col justify-between backdrop-blur-md transition-transform duration-500 hover:scale-105"
      >
        <!-- Seal / Ribbon Top -->
        <div
          class="mx-auto w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg text-navy-950 font-bold text-lg"
        >
          🎓
        </div>

        <!-- Content inside envelope card -->
        <div class="space-y-4">
          <p class="text-xs text-slate-400 italic">{{ salutation }}</p>
          <h2 class="text-xl font-bold text-gold-gradient font-serif">{{ guestName }}</h2>
          <div class="w-12 h-[1px] bg-gold-500/40 mx-auto"></div>
          <p class="text-xs text-slate-300 leading-relaxed">
            Sự hiện diện của bạn là niềm vinh hạnh lớn cho cột mốc quan trọng này của mình.
          </p>
        </div>

        <!-- Bottom hint -->
        <div class="text-[10px] uppercase tracking-widest text-gold-400/80 animate-pulse">
          Chạm để mở thư
        </div>
      </div>
    </div>

    <!-- Footer instruction -->
    <div class="pb-8 z-10">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-slate-300"
      >
        <span class="w-2 h-2 rounded-full bg-gold-500 animate-ping"></span>
        Chạm bất kỳ đâu trên màn hình để tiếp tục
      </div>
    </div>
  </div>
</template>
