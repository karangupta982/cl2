<script setup lang="ts">
import SplitText from "~/components/base/SplitText.vue";
import ceo from '@/assets/images/about/CEO_cover.png';
const {$gsap: gsap} = useNuxtApp();
import CustomIcon from "~/components/base/CustomIcon.vue";
import BlockPlayer from "~/components/blocks/blockPlayer.vue";

const ctx = ref();

onMounted(() => {
  // ctx.value = gsap.context((self) => {
  //   gsap.timeline()
  //       .from('.hero-image', {
  //         scale: 2
  //       }).to('.hero-image', {
  //     scale: 1
  //   })
    // gsap.from('.p-text', {y: '100%', opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power1.out',})
    // gsap.from('.p-title', {y: '100%', opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power1.out',})
    // gsap.from('.p-btn', {y: '100%', opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power1.out',})
  // });
});

onUnmounted(() => {
  // ctx.value.revert();
});

</script>

<template>
  <div class="sm:py-[52px] py-[16px]  px-4 w-full max-w-[1232px] mx-auto">
    <div class="w-full overflow-hidden h-fit rounded-[20px] min-h-full">
    <nuxt-img src="/about/mission.png" fit="cover" class="transition-all w-full h-full hover:scale-105 duration-700"/>
    </div>
    <div class="flex flex-col md:flex-row lg:gap-[44px] gap-4 justify-center items-center md:mt-[-120px] mt-4 relative z-[2]">
      <div class="flex items-center gap-6 bg-white h-[235px] rounded-[20px] md:px-[40px] px-[16px]"
           style="box-shadow: 4px 11px 20px 0px #00000012;">
        <div>
           <CustomIcon name="mission"/>
        </div>

        <div>
          <h6 class="text-[18px] font-georgia mb-[10px]">Our Mission</h6>
          <p class="max-w-[250px] text-paragraph leading-[25px]">To be the preferred Real Estate investment services provider in West Africa.</p>
        </div>
      </div>
      <div class="flex items-center gap-6 bg-white h-[235px] rounded-[20px] md:px-[40px] px-[16px]"
           style="box-shadow: 4px 11px 20px 0px #00000012;">
        <div>
        <CustomIcon name="vision"/>
        </div>
        <div>
          <h6 class="text-[18px] font-georgia mb-[10px]">Our Vision</h6>
          <p class="max-w-[250px] text-paragraph leading-[25px]">
            To help individuals, families and businesses harness the right
Real Estate investment opportunities in Nigeria.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>