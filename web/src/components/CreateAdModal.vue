<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import AppButton from "./AppButton.vue";
import AppLabel from "@/components/Form/AppLabel.vue";
import AppInput from "@/components/Form/AppInput.vue";
import InputDays from "@/components/InputDays.vue";
import { reactive, computed } from "vue";

import { useGameStore } from "@/store/game";
import { AdService } from "@/services/ad-service";

interface Props {
  isOpen: boolean;
}

defineProps<Props>();
const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}

const store = useGameStore();
const games = computed(() => store.games);

const form = reactive({
  weekDays: [],
  game: 0,
  name: "",
  discord: "",
  yearsPlaying: 0,
  hoursStart: "00:00",
  hoursEnd: "00:00",
  useVoiceChannel: false,
});

async function createAd() {
  const adService = new AdService();
  const payload = {
    ...form,
  };

  await adService.create(form.game, payload);
}
</script>
<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 transition-opacity bg-black bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative px-10 py-8 overflow-hidden text-left text-white transition-all transform bg-[#2A2634] rounded-lg shadow-xl max-w-2xl"
            >
              <DialogTitle class="text-3xl font-black text-white"
                >Publique um anúncio</DialogTitle
              >
              <form class="mt-8" @submit.prevent="createAd">
                <fieldset class="flex flex-col gap-4">
                  <div class="flex flex-col gap-2">
                    <AppLabel for="game">Qual game?</AppLabel>
                    <select
                      v-model="form.game"
                      id="game"
                      name="game"
                      class="p-4 text-sm text-white rounded-lg bg-zinc-900 placeholder:text-zinc-500 focus:border-violet-500 focus:ring-violet-500"
                    >
                      <option
                        v-for="game in games"
                        :key="game.id"
                        :value="game.id"
                      >
                        {{ game.title }}
                      </option>
                    </select>
                  </div>
                  <div class="flex flex-col gap-2">
                    <AppLabel for="name">Seu nome (ou nickname)?</AppLabel>
                    <AppInput
                      type="text"
                      id="name"
                      name="name"
                      v-model="form.name"
                      placeholder="Como você gostaria de ser chamado?"
                    />
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2">
                      <AppLabel for="yearsPlaying"
                        >Joga há quantos anos?</AppLabel
                      >
                      <AppInput
                        type="number"
                        id="yearsPlaying"
                        name="yearsPlaying"
                        v-model.number="form.yearsPlaying"
                        placeholder="Tudo bem ser zero"
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <AppLabel for="discord">Qual seu discord</AppLabel>
                      <AppInput
                        type="text"
                        id="discord"
                        name="discord"
                        v-model="form.discord"
                        placeholder="usuário#0000"
                      />
                    </div>
                  </div>

                  <div class="flex gap-6">
                    <div class="flex flex-col gap-2">
                      <AppLabel for="weekDays">Quando costuma jogar?</AppLabel>
                      <InputDays
                        id="weekDays"
                        name="weekDays"
                        v-model="form.weekDays"
                      />
                    </div>
                    <div class="flex flex-col flex-1 gap-2">
                      <AppLabel for="hoursStart">Qual horário do dia?</AppLabel>
                      <div class="grid grid-cols-2 gap-2">
                        <AppInput
                          id="hoursStart"
                          name="hoursStart"
                          type="time"
                          v-model="form.hoursStart"
                          placeholder="De"
                        />
                        <AppInput
                          id="hoursEnd"
                          name="hoursEnd"
                          v-model="form.hoursEnd"
                          type="time"
                          placeholder="Até"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-2 text-sm">
                    <input
                      class="bg-transparent border rounded border-zinc-600 text-violet-500 focus:ring-violet-500"
                      type="checkbox"
                      name="voiceChannel"
                      id="voiceChannel"
                      v-model="form.useVoiceChannel"
                    />
                    <AppLabel for="voiceChannel" class="font-normal"
                      >Costumo me conectar ao chat de voz</AppLabel
                    >
                  </div>

                  <footer class="flex justify-end gap-4 mt-4">
                    <AppButton
                      type="button"
                      @click="closeModal"
                      variant="secondary"
                      >Cancelar</AppButton
                    >
                    <AppButton type="submit">Publicar anúncio</AppButton>
                  </footer>
                </fieldset>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
