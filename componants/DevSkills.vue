<script setup lang="ts">
 defineProps({
   fileName: {
     type: String,
     required: true
   },
   alt: {
     type: String,
     required: true
   }
 })
</script>

<template>
  <div class="bg-greys-dark aspect-square h-full p-[20px] flex justify-center items-center rounded-[10px]">
    <img :src="'/imgs/' + fileName + '.png'" :alt="alt">
  </div>
</template>

<style scoped>
  div {
    transition: all 300ms ease-in-out;
  }
  div::after {
    content: v-bind(alt);
    display: none;
  }
  div:hover {
    transform: scale(1.1);
    filter: brightness(30%);
  }
  div::after:hover {
    display: block;
  }
</style>