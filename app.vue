<template>
  <div class="h-screen">
      <div v-if="loading" class="fixed left-0 top-0 h-full w-full z-50 flex justify-center items-center bg-white" >
        <ProgressSpinner />
      </div>
    <video poster="https://sujimotonig.com/wp-content/themes/sjwp/assets/video/screenshot1.jpg" autoplay="" muted=""
           :loop="false" class="fixed top-0 left-0 w-full z-[200] min-h-[100vh] bg-black"
           v-if="!showVideo && !loading"
           @ended="showVideo='skip'"
           style="background-image: url('https://sujimotonig.com/wp-content/themes/sjwp/assets/video/screenshot1.jpg&quot'); opacity: 1;">
      <source src="https://sujimotonig.com/wp-content/themes/sjwp/assets/video/intro.webm" type="video/webm">
      <source src="https://sujimotonig.com/wp-content/themes/sjwp/assets/video/intro.mp4" type="video/mp4">
    </video>
    <button v-if="!showVideo && !loading" @click="skip"
            class="fixed z-[201] right-[20px] top-[20px] text-white">
<i class="pi pi-times" style="font-size: 1.5rem"></i>
    </button>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true);
// console.log(nuxtApp)
nuxtApp.hook("page:start", () => {
  // console.log('start')
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000)

});
const showVideo = process.server ? ref('') : ref(localStorage.getItem('showIntro'))
const skip = () => {
  localStorage.setItem('showIntro', 'skip')
  showVideo.value = 'skip'
}

</script>