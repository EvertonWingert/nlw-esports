<script setup lang="ts">
interface Props {
  modelValue: number[];
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

function setDayActive(day: number) {
  const dayIndex = props.modelValue.indexOf(day);
  if (dayIndex >= 0) {
    emit(
      "update:modelValue",
      props.modelValue.filter((d) => d !== day)
    );
  } else {
    emit("update:modelValue", [...props.modelValue, day]);
  }
}
function isDayActive(day: number) {
  return props.modelValue.indexOf(day) >= 0;
}
</script>
<template>
  <div class="grid grid-cols-4 gap-2">
    <button
      @click="setDayActive(0)"
      title="Doming"
      type="button"
      :class="[
        isDayActive(0) ? 'bg-violet-500' : 'bg-zinc-900',
        'w-10 h-10 rounded',
      ]"
    >
      D
    </button>
    <button
      @click="setDayActive(1)"
      title="Segunda"
      type="button"
      :class="[
        isDayActive(1) ? 'bg-violet-500' : 'bg-zinc-900',
        'w-10 h-10 rounded',
      ]"
    >
      S
    </button>
    <button
      @click="setDayActive(2)"
      title="Terça"
      type="button"
      :class="[
        isDayActive(2) ? 'bg-violet-500' : 'bg-zinc-900',
        'w-10 h-10 rounded',
      ]"
    >
      T
    </button>
    <button
      @click="setDayActive(3)"
      title="Quarta"
      type="button"
      :class="[
        isDayActive(3) ? 'bg-violet-500' : 'bg-zinc-900',
        'w-10 h-10 rounded',
      ]"
    >
      Q
    </button>
    <button
      @click="setDayActive(4)"
      title="Quinta"
      type="button"
      :class="[
        isDayActive(4) ? 'bg-violet-500' : 'bg-zinc-900',
        'w-10 h-10 rounded',
      ]"
    >
      Q
    </button>
    <button
      @click="setDayActive(5)"
      title="Sexta"
      type="button"
      :class="[
        isDayActive(5) ? 'bg-violet-500' : 'bg-zinc-900',
        'w-10 h-10 rounded',
      ]"
    >
      S
    </button>
    <button
      @click="setDayActive(6)"
      title="Sábado"
      type="button"
      :class="[
        isDayActive(6) ? 'bg-violet-500' : 'bg-zinc-900',
        'w-10 h-10 rounded',
      ]"
    >
      S
    </button>
  </div>
</template>
