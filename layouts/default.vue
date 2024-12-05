<!-- <template>
  <div class="overflow-x-hidden" >
    <AppHeader></AppHeader>
    <slot />
    <AppFooter/>

  </div>
</template>

<script setup>
import AppFooter from "~/components/AppFooter.vue";

</script>
-->


<!-- p68-website-master/layouts/default.vue -->
<template>
  <div class="overflow-x-hidden">
    <PreLoader2 v-if="isFirstVisit && showVideo === ''" />
    <PreLoader v-else />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import PreLoader from '~/components/PreLoader.vue';
import PreLoader2 from '~/components/PreLoader2.vue';


const showVideo = ref(''); // Initialize showVideo as a ref
const isFirstVisit = ref(false);

if (process.client) {
      showVideo.value = localStorage.getItem('showIntro') || '';
      isFirstVisit.value = !localStorage.getItem('hasVisited'); // Check if user is visiting for the first time

      if (isFirstVisit.value) {
        localStorage.setItem('hasVisited', 'true'); // Set flag for future visits
      }
    }
</script>