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
import { reactive } from "vue";
import InputDays from "./InputDays.vue";

interface Props {
  isOpen: boolean;
}

defineProps<Props>();
const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}

const form = reactive({
  weekDays: [] as number[],
});
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
              <form class="mt-8">
                <fieldset class="flex flex-col gap-4">
                  <div class="flex flex-col gap-2">
                    <AppLabel for="game">Qual o game?</AppLabel>
                    <AppInput
                      type="text"
                      id="game"
                      placeholder="Selecione o game que deseja jogar"
                    />
                  </div>
                  <div class="flex flex-col gap-2">
                    <AppLabel for="name">Seu nome (ou nickname)?</AppLabel>
                    <AppInput
                      type="text"
                      id="name"
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
                        placeholder="Tudo bem ser zero"
                      />
                    </div>
                    <div class="flex flex-col gap-2">
                      <AppLabel for="discord">Qual seu discord</AppLabel>
                      <AppInput
                        type="text"
                        id="discord"
                        placeholder="usuário#0000"
                      />
                    </div>
                  </div>

                  <div class="flex gap-6">
                    <div class="flex flex-col gap-2">
                      <AppLabel for="weekDays">Quando costuma jogar?</AppLabel>
                      <InputDays id="weekDays" v-model="form.weekDays" />
                    </div>
                    <div class="flex flex-col flex-1 gap-2">
                      <AppLabel for="hoursStart">Qual horário do dia?</AppLabel>
                      <div class="grid grid-cols-2 gap-2">
                        <AppInput
                          id="hoursStart"
                          type="time"
                          placeholder="De"
                        />
                        <AppInput id="hoursEnd" type="time" placeholder="Até" />
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 mt-2 text-sm">
                    <input
                      class="bg-transparent border rounded border-zinc-600 text-violet-500"
                      type="checkbox"
                      id="voiceChannel"
                    />
                    Costumo me conectar ao chat de voz
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
