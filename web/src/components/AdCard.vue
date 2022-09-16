<template>
  <div class="px-4 flex flex-col py-4 rounded-lg bg-[#2A2634]">
    <dl class="flex flex-col gap-4 px-2">
      <div class="flex flex-col">
        <dt class="text-sm font-medium text-zinc-500">Nome</dt>
        <dd class="mt-1 text-sm text-white">{{ ad.name }}</dd>
      </div>
      <div class="flex flex-col">
        <dt class="text-sm font-medium text-zinc-500">Tempo de jogo</dt>
        <dd class="mt-1 text-sm text-white">{{ ad.yearsPlaying }} ano</dd>
      </div>
      <div class="flex flex-col">
        <dt class="text-sm font-medium text-zinc-500">Disponibilidade</dt>
        <dd class="mt-1 text-sm text-white">
          {{ ad.hoursStart }} - {{ ad.hoursEnd }}
          <time v-for="(day, index) in ad.weekDays" :key="day">
            {{ getWeekDayByNumber(day)
            }}{{
              ad.weekDays.length > 1 && index === ad.weekDays.length - 1
                ? ""
                : ", "
            }}
          </time>
        </dd>
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

function getWeekDayByNumber(number: number | string) {
  const n = Number(number);
  switch (n) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda";
    case 2:
      return "Terça";
    case 3:
      return "Quarta";
    case 4:
      return "Quinta";
    case 5:
      return "Sexta";
    case 6:
      return "Sábado";
  }
}
</script>
