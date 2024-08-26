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
  <div class="bg-greys-dark flex justify-center aspect-square items-center rounded-[10px] h-[55px] w-auto md:h-[100px] md:w-auto">
    <img class="h-1/2 md:h-1/4" :src="'/imgs/' + fileName + '.png'" :alt="alt">
  </div>
</template>