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
  <div class="bg-greys-dark flex justify-center aspect-square items-center rounded-[10px]">
    <img :src="'/imgs/' + fileName + '.png'" :alt="alt">
  </div>
</template>