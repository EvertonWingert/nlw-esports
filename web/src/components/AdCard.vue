<template>
  <div class="px-4 flex flex-col py-4 rounded-lg bg-[#2A2634]">
    <dl class="flex flex-col gap-4 px-2">
      <div class="flex flex-col">
        <dt class="text-sm font-medium text-zinc-500">Nome</dt>
        <dd class="mt-1 text-sm text-white">{{ ad.name }}</dd>
      </div>
      <div class="flex flex-col">
        <dt class="text-sm font-medium text-zinc-500">Tempo de jogo</dt>
        <dd class="mt-1 text-sm text-white">{{ ad.yearsPlaying }}</dd>
      </div>
      <div class="flex flex-col">
        <dt class="text-sm font-medium text-zinc-500">Disponibilidade</dt>
        <dd class="mt-1 text-sm text-white">{{ ad.yearsPlaying }}</dd>
      </div>
      <div class="flex flex-col">
        <dt class="text-sm font-medium text-zinc-500">Chamada de áudio</dt>
        <dd
          class="mt-1 text-sm"
          :class="[ad.useVoiceChannel ? 'text-green-500' : 'text-white']"
        >
          {{ ad.useVoiceChannel ? "Sim" : "Não" }}
        </dd>
      </div>
    </dl>
    <AppButton class="mt-4">Conectar</AppButton>
  </div>
</template>
<script setup lang="ts">
import type { Ad } from "@/@types/ad";
import AppButton from "@/components/AppButton.vue";

interface Props {
  ad: Ad;
}

defineProps<Props>();
</script>
