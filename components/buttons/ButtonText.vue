<script setup lang="ts">
import Icon from "~/components/Icon.vue";

defineProps({
  text: String,
  url: String,
  iconName: String,
  iconSize: Number,
  iconColor: String,
  iconStrokeWidth: Number
})
</script>

<template>
  <a :href="url"><Icon :name="iconName" :size=iconSize :color="iconColor" :stroke-width=iconStrokeWidth /><span>{{ text }}</span></a>
</template>

<style scoped>
  a {
    width: fit-content;
    display: inline-flex;
    gap: 15px;
    padding: 15px 30px;
    background-color: #DA5462;
    color: white;
    border-radius: 30px;
    border: #E17681 solid 2px;
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