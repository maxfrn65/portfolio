<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="url" class="hover-underline-animation"><h1>{{ text }}</h1></a>
</template>

<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  width: fit-content;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 5px;
  bottom: 5px;
  left: 0;
  background-color: #DA5462;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>