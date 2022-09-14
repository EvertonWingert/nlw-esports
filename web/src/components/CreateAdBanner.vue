<script setup lang="ts">
import { MagnifyingGlassCircleIcon } from "@heroicons/vue/24/outline";
import AppButton from "@/components/AppButton.vue";

const emit = defineEmits(["create-ad"]);
function createAd() {
  emit("create-ad");
}
</script>
<template>
  <div
    class="w-full my-8 rounded-lg bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]"
  >
    <div
      class="flex flex-col md:flex-row w-full py-6 px-8 bg-[#2A2634] justify-between items-center text-white rounded-md text-base mt-1"
    >
      <div className="flex-grow flex flex-col">
        <strong class="text-2xl font-black text-white"
          >Não encontrou seu duo?</strong
        >
        <span class="text-base text-zinc-400"
          >Publique um anúncio para encontrar novos players!</span
        >
      </div>
      <AppButton @click="createAd">
        <MagnifyingGlassCircleIcon class="w-6 h-6 mr-3" />
        Publicar anúncio
      </AppButton>
    </div>
  </div>
</template>
