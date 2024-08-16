<script setup lang="ts">
import ButtonsText from "~/componants/buttons/ButtonText.vue";
import ButtonIcon from "~/componants/buttons/ButtonIcon.vue";
import Icon from "~/componants/Icon.vue";

let skills = ['Web', 'Vue.js', 'Symfony', 'Fullstack']
let skill = skills.forEach((element) => skill = element)
</script>

<template>
  <section>
    <header class="flex justify-end gap-3 absolute top-0 left-0 mt-[40px] w-full bg-neutral-white px-[20px]">
      <button-icon url="#" iconName="Languages" iconStrokeWidth="2"/>
      <buttons-text url="#" iconName="Menu" iconColor="white" iconStrokeWidth="2"/>
    </header>
    <section class="flex flex-col justify-around items-center bg-neutral-white h-[100vh] pt-40 gap-[50px] px-[20px]">
      <div class="flex flex-col gap-20">
        <div class="flex justify-center items-center">
          <h1 class="font-stix z-10 text-primary-500">Bienvenue !</h1>
          <h1 class="absolute font-stix text-[80px] text-transparent text-stroke-2 lg:text-[160px]">Portfolio</h1>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h2>Maxime Fourna</h2>
          <p>Développeur full stack | Designer UI/UX</p>
        </div>
      </div>
      <div class="w-full flex justify-end">
        <div class="flex justify-center items-center">
          <img class="animate-spin-slow" src="/assets/img/circular_text.png" alt="">
          <icon class="absolute" name="ArrowDownLeft" size="54" stroke-width="1"/>
        </div>
      </div>
    </section>
  </section>
  <section class="bg-neutral-black p-5 text-white">
    <h1 class="font-jetbrainsmono">&lt;h1&gt;Je suis un développeur {{ skill }}</h1>
  </section>
  <section class="bg-gray-200 p-5">ui</section>
  <section class="bg-gray-100 p-5">projects</section>
  <section class="bg-gray-200 p-5">about</section>
  <section class="bg-gray-100 p-5">thanks</section>
  <section class="bg-gray-900 p-5"><p class="text-white">footer</p></section>

</template>