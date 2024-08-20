<script setup lang="ts">

import ButtonsText from "~/components/buttons/ButtonText.vue";
import ButtonIcon from "~/components/buttons/ButtonIcon.vue";
import Icon from "~/components/Icon.vue";
import { ref, computed, onMounted, watch } from 'vue';
import DevSkills from "~/components/DevSkills.vue";
import ButtonText from "~/components/buttons/ButtonText.vue";
import NavLink from "~/components/buttons/NavLink.vue";

// Tableau des skills
const skills = ['JavaScript', 'Vue.js', 'PHP', 'Symfony', 'React Native'];

// Tableau des couleurs associées
const colors = ['text-yellow-500', 'text-green-500', 'text-blue-500', 'text-purple-500', 'text-indigo-500'];

// Références pour l'index courant et le texte affiché
const currentIndex = ref(0);
const displayedText = ref('');

// Propriété calculée pour le skill actuel
const currentSkill = computed(() => skills[currentIndex.value]);

// Propriété calculée pour la couleur actuelle
const currentColor = computed(() => colors[currentIndex.value]);

// Fonction pour démarrer l'effet d'écriture
const startTypingEffect = () => {
  let charIndex = 0;
  displayedText.value = '';

  const typeWriterInterval = setInterval(() => {
    if (charIndex < currentSkill.value.length) {
      displayedText.value += currentSkill.value[charIndex];
      charIndex++;
    } else {
      clearInterval(typeWriterInterval);
      // Démarrer la rotation du mot suivant après une pause
      setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % skills.length;
      }, 2000); // Pause de 1 seconde avant le prochain mot
    }
  }, 100); // Temps entre chaque caractère (100ms)
};

// Démarrer l'effet d'écriture au montage du composant
onMounted(() => {
  startTypingEffect();
});

// Regarder les changements d'index pour redémarrer l'effet d'écriture
watch(currentIndex, () => {
  startTypingEffect();
});
</script>

<template>
  <section>
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
          <icon class="absolute" name="ArrowDownLeft" :size="54" :stroke-width="1"/>
        </div>
      </div>
    </section>
  </section>
  <section class="bg-neutral-black p-5 text-white flex flex-col gap-[50px] py-[100px]">
    <h1 class="font-jetbrainsmono">&lt;h1&gt;Je suis un développeur<br><span :class="currentColor" class="w-fit font-jetbrainsmono text-[32.4px]">{{ displayedText }}<span class="blinking-cursor">|</span></span>&lt;/h1&gt;</h1>
    <p class="font-jetbrainsmono">&lt;p&gt;Je maitrise les fondamentaux du développement Web. Je suis capable de concevoir des applications web robustes avec des technologies modernes.&lt;/p&gt;</p>
    <div class="grid grid-cols-4 gap-[20px]">
      <dev-skills file-name="js" alt="JavaScript" />
      <dev-skills alt="PHP" file-name="php" />
      <dev-skills alt="Symfony" file-name="symfony" />
      <dev-skills alt="Vue.js" file-name="vuejs" />
      <dev-skills alt="React Native" file-name="react" />
      <dev-skills alt="MySQL" file-name="mysql" />
      <dev-skills alt="Git" file-name="git" />
      <dev-skills alt="Docker" file-name="docker" />
      <dev-skills alt="Postman" file-name="postman" />
    </div>
  </section>
  <section class="flex flex-col bg-neutral-white py-[100px] px-[20px] gap-[50px]">
    <div class="flex justify-between items-center">
      <div class="w-1/2">
        <div class="relative flex w-full justify-between top-[20%]">
          <div class="aspect-square h-4 bg-primary-500"></div>
          <div class="aspect-square h-4 bg-primary-500"></div>
        </div>
        <div class="flex justify-center items-center border-primary-500 border-[2px] p-[10px] mx-[5px] my-[-10px]">
          <h1 class="underline">Je suis un designer UI/UX</h1>
        </div>
        <div class="relative flex w-full justify-between bottom-[5%]">
          <div class="aspect-square h-4 bg-primary-500"></div>
          <div class="aspect-square h-4 bg-primary-500"></div>
        </div>
      </div>
      <img src="/assets/img/ibeam.png" alt="">
      <img class="h-[50%]" src="/assets/img/figma_logo.png">
    </div>
    <h2>Je produits des <span class="text-[28.8px] text-primary-500">maquettes d’applications</span> interactives et innovantes avec une veille sur les tendances en <span class="text-[28.8px] text-primary-500">design</span> tout en prenant en compte les problématiques <span class="text-[28.8px] text-primary-500">d’accessibilité</span>.</h2>
  </section>
  <section class="flex flex-col gap-[50px] bg-neutral-white px-[20px] py-[100px] items-center">
    <h1 class="text-center">Intéressé par mon<br>profil ?<br>Jetez un oeil sur mes projets !</h1>
    <button-text text="Mes projets" url="#" icon-name="ArrowRight"></button-text>
  </section>
  <section id="about" class="flex flex-col items-center bg-neutral-white py-[100px] px-[20px] gap-[50px]">
    <div class="flex flex-col gap-[30px]">
      <img src="/assets/img/pp.png" alt="Maxime Fourna">
      <div class="flex gap-[50px]">
        <a href="#">
          <icon name="Mail" :stroke-width="2" />
        </a>
        <a href="#">
          <icon name="Github" :stroke-width="2" />
        </a>
        <a href="#">
          <icon name="Linkedin" :stroke-width="2" />
        </a>
      </div>
    </div>
    <p>
      Je m'appelle Maxime Fourna, et je suis passionné par le développement Web et le design UI/UX.
      J'ai commencé à m'intéresser au développement Web en 2018, lorsque j'ai commencé
      à apprendre le HTML et le CSS. J'ai ensuite appris le JavaScript et le PHP, puis des frameworks comme Vue.js, React et Symfony.
      J'ai également appris à utiliser des outils de gestion de projet
      comme GitHub et des outils de conception comme Figma.
    </p>
  </section>
  <section class="flex flex-col items-center bg-neutral-white py-[100px] px-[20px] gap-[50px]">
    <h1>Merci d'avoir regardé !</h1>
    <p>Made with ❤️ with Nuxt.js, Strapi and Anime.js</p>
  </section>
  <section class="flex flex-col items-center bg-neutral-black py-[50px] px-[20px] text-neutral-white">
    <p>© Copyright 2024 — Tous droits réservés</p>
  </section>
</template>

<style scoped>
.blinking-cursor {
  font-weight: bold;
  font-size: 1em;
  color: inherit;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
</style>
