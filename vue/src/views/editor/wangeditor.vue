<script setup lang="ts">
import wangEditor from '@/components/wangEditor/editor.vue'
import { ref } from 'vue'

const content = ref('<p>banmashou.com</p>')
</script>

<template>
  <div>
    <wangEditor v-model="content" />
    {{ content }}
  </div>
</template>

<style lang="scss"></style>
