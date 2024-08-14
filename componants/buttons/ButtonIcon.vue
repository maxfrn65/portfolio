<script setup lang="ts">
import Icon from "~/componants/Icon.vue";

defineProps({
  url: String,
  iconName: String,
  iconSize: Number,
  iconColor: String,
  iconStrokeWidth: Number
})
</script>

<template>
  <a :href="url"><Icon :name="iconName" :size="iconSize" :color="iconColor" :stroke-width="iconStrokeWidth"/></a>
</template>

<style scoped>
  a {
    display: inline-flex;
    gap: 15px;
    padding: 15px;
    background-color: #F9F9F9;
    border-radius: 30px;
    border: #E5E5E5 solid 2px;
    transition: 150ms all ease-in-out;
  }

  a:hover {
    transform: scale(1.05);
    box-shadow: #E5E5E5 5px 5px 10px;
  }

  a:active {
    transform: scale(0.95);
  }
</style>