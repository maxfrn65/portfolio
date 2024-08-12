<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href=url></a>
</template>

<style scoped>

</style>