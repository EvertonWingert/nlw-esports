<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
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
    <AppButton
      @click="setDayActive(0)"
      title="Doming"
      type="button"
      :variant="isDayActive(0) ? 'primary' : 'secondary'"
      >D</AppButton
    >
    <AppButton
      @click="setDayActive(1)"
      title="Segunda"
      type="button"
      :variant="isDayActive(1) ? 'primary' : 'secondary'"
      >S</AppButton
    >
    <AppButton
      @click="setDayActive(2)"
      title="Terça"
      type="button"
      :variant="isDayActive(2) ? 'primary' : 'secondary'"
      >T</AppButton
    >
    <AppButton
      @click="setDayActive(3)"
      title="Quarta"
      type="button"
      :variant="isDayActive(3) ? 'primary' : 'secondary'"
      >Q
    </AppButton>
    <AppButton
      @click="setDayActive(4)"
      title="Quinta"
      type="button"
      :variant="isDayActive(4) ? 'primary' : 'secondary'"
      >Q</AppButton
    >
    <AppButton
      @click="setDayActive(5)"
      title="Sexta"
      type="button"
      :variant="isDayActive(5) ? 'primary' : 'secondary'"
      >S</AppButton
    >
    <AppButton
      @click="setDayActive(6)"
      title="Sábado"
      type="button"
      :variant="isDayActive(6) ? 'primary' : 'secondary'"
      >S</AppButton
    >
  </div>
</template>
