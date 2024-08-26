<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import ButtonIcon from "~/components/buttons/ButtonIcon.vue";
import ButtonText from "~/components/buttons/ButtonText.vue";
import ButtonsText from "~/components/buttons/ButtonText.vue";

function openBurgerMenu() {
  const burgerMenu = document.querySelector('.burgerMenu')
  burgerMenu.classList.remove('left-[-100%]')
  burgerMenu.classList.add('left-0')
  burgerMenu.classList.remove('hidden')
  document.body.style.overflow = "hidden"
}

function closeBurgerMenu() {
  const burgerMenu = document.querySelector('.burgerMenu')
  burgerMenu.classList.remove('left-0')
  burgerMenu.classList.add('left-[-100%]')
  document.body.style.overflow = "auto"
}
</script>

<template>
  <div class="burgerMenu transition-all ease-in-out duration-300 absolute w-full h-screen top-0 left-[-100%] bg-neutral-white z-30 flex flex-col items-center justify-end px-[20px] py-[50px] gap-[150px]">
    <h1 class="text-primary-500 text-[48px]">Bienvenue ! 👋</h1>
    <div class="flex flex-col items-center gap-[50px]">
      <div class="flex flex-col gap-[20px] items-center">
        <NuxtLink class="nav-link" @click="closeBurgerMenu" to="/">Accueil</NuxtLink>
        <NuxtLink class="nav-link" @click="closeBurgerMenu" to="/projects">Mes projets</NuxtLink>
        <NuxtLink class="nav-link" @click="closeBurgerMenu" :to="{ path: '/', hash: '#about' }">À propos</NuxtLink>
      </div>
      <button-text url="mailto:maxime.fourna@gmail.com" text="Conctact" icon-name="Mail" :icon-stroke-width="2"/>
    </div>
    <button-icon @click="closeBurgerMenu" class="closeNavBtn hover:cursor-pointer" icon-name="X" />
  </div>
  <header class="flex justify-end gap-3 absolute top-0 left-0 mt-[40px] w-full bg-neutral-white px-[20px] md:px-[170px]">
    <button-icon icon-name="Home" icon-stroke-width="2" url="/"/>
    <buttons-text @click="openBurgerMenu" text="Menu" iconName="Menu" iconColor="white" :iconStrokeWidth="2"/>
  </header>
  <NuxtPage />
  <Footer />
</template>

<style scoped>
.nav-link {
  font-size: 32.4px;
  font-weight: bold;
  display: inline-block;
  position: relative;
  width: fit-content;
}

.nav-link::after {
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

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>