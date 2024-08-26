<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Project } from '~/types';
import { register } from 'swiper/element/bundle';
import ButtonText from "~/components/buttons/ButtonText.vue";
import ButtonIcon from "~/components/buttons/ButtonIcon.vue";

register();
let devProjectsResponse = ref(null);
let uiProjectsResponse = ref(null);
let currentSection = ref(null);
let devBtn = ref(null);
let uiBtn = ref(null);
let activeSection = ref('dev'); // Pour savoir quelle section est active
let selectedProject = ref<Project | null>(null); // Référence au projet sélectionné
let showModal = ref(false); // Référence pour afficher ou non la modale

onMounted(async () => {
  devBtn.value = document.getElementById('devButton');
  uiBtn.value = document.getElementById('uiButton');

  const { find } = useStrapi();

  devProjectsResponse.value = await find<Project>('projects', {
    populate: '*',
    filters: {
      type: {
        $eq: 'dev'
      }
    }
  });

  uiProjectsResponse.value = await find<Project>('projects', {
    populate: '*',
    filters: {
      type: {
        $eq: 'ui'
      }
    }
  });

  currentSection.value = devProjectsResponse.value;
});

function devSection() {
  activeSection.value = 'dev';
  currentSection.value = devProjectsResponse.value;
}

function uiSection() {
  activeSection.value = 'ui';
  currentSection.value = uiProjectsResponse.value;
}

function openModal(project: Project) {
  selectedProject.value = project;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedProject.value = null;
}
</script>

<template>
  <section class="flex flex-col items-center bg-neutral-white pt-60 gap-[50px] px-[20px]">
    <!-- Section d'en-tête -->
    <div class="flex justify-center items-center">
      <h1 class="font-stix z-10 text-primary-500">Réalisations</h1>
      <h1 class="absolute font-stix text-[72px] text-transparent text-stroke-2 transform scale-x-[-100%] lg:text-[160px]">Mes projets</h1>
    </div>

    <!-- Section des boutons -->
    <div class="flex bg-neutral-white border-greys-light border p-[5px] rounded-[30px] relative">
      <NuxtLink
          @click="devSection"
          id="devButton"
          class="relative px-[15px] py-[10px] rounded-full z-10 transition-colors duration-300"
          :class="{'bg-greys-light text-primary-500': activeSection === 'dev', 'text-neutral-500': activeSection !== 'dev'}"
      >
        <h6>Développement Web</h6>
      </NuxtLink>
      <NuxtLink
          @click="uiSection"
          id="uiButton"
          class="relative px-[15px] py-[10px] rounded-full z-10 transition-colors duration-300"
          :class="{'bg-greys-light text-primary-500': activeSection === 'ui', 'text-neutral-500': activeSection !== 'ui'}"
      >
        <h6>UI/UX</h6>
      </NuxtLink>
    </div>
  </section>

  <!-- Section des projets -->
  <section class="grid grid-cols-1 md:grid-cols-4 bg-neutral-white gap-[30px] my-[50px] px-[20px]">
    <NuxtLink
        @click.prevent="openModal(project)"
        class="flex flex-col gap-[10px] p-[20px] border-[1px] h-fit border-greys-light transition duration-200 active:scale-[98%] active:bg-greys-light rounded-[20px] md:hover:scale-[102%] md:hover:bg-greys-light md:hover:cursor-pointer"
        v-for="project in currentSection?.data"
        :key="project.id"
    >
      <img class="rounded-[10px]" :src="'https://pf-be.maximefourna.fr' + project.attributes.imgs.data[0]?.attributes.url" alt="project.attributes.title">
      <div class="flex flex-col gap-[5px]">
        <h3>{{ project.attributes.title }}</h3>
        <p>{{ project.attributes.tech }}</p>
      </div>
    </NuxtLink>
  </section>

  <!-- Modale DaisyUI -->
  <div v-if="showModal" class="modal modal-open w-full">
    <div class="modal-box">
      <div class="flex justify-end mb-[20px]">
        <button-icon @click="closeModal" icon-name="X" />
      </div>
      <div class="flex flex-col">
        <swiper-container
            space-between="10"
            slides-per-view="1"
            class="w-full"
            :navigation="true"
            :pagination="{ clickable: true }"
        >
          <swiper-slide
              v-for="image in selectedProject?.attributes.imgs.data"
              :key="image.id"
              class="h-fit"
          >
            <img :src="'https://pf-be.maximefourna.fr' + image.attributes.url" alt="image.attributes.name" class="rounded-lg" />
          </swiper-slide>
        </swiper-container>
        <h2 class="mt-[30px]">{{ selectedProject?.attributes.title }}</h2>
        <p class="py-4">{{ selectedProject?.attributes.description }}</p>
      </div>
      <div class="modal-action" v-if="selectedProject?.attributes.link">
        <button-text :url="selectedProject?.attributes.link" text="Voir le projet" target="_blank" />
      </div>
    </div>
  </div>
</template>
