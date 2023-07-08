<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})
</script>

<template>
  <input type="text" class="bm-input" :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<style lang="scss" scoped>
.bm-input {
  @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-1 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
