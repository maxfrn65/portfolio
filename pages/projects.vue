<script setup lang="ts">

</script>

<template>
  <section class="flex flex-col items-center bg-neutral-white pt-60 gap-[50px] px-[20px]">
    <div class="flex justify-center items-center">
      <h1 class="font-stix z-10 text-primary-500">Réalisations</h1>
      <h1 class="absolute font-stix text-[72px] text-transparent text-stroke-2 transform scale-x-[-100%] lg:text-[160px]">Mes projets</h1>
    </div>
    <div class="bg-neutral-white border-greys-light border p-[5px] rounded-[25px]">
      <NuxtLink>Développement Web</NuxtLink>
      <NuxtLink>UI/UX</NuxtLink>
    </div>
  </section>
  <NuxtPage></NuxtPage>
</template>

<style scoped>

</style>
