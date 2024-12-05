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
  <div
      class="hero-box sm:py-[52px] py-[16px] flex items-stretch flex-col-reverse md:flex-row justify-between px-4 w-full max-w-[1232px] mx-auto gap-[82px]">
    <div class="w-full max-w-[496px]">
      <nuxt-img src="/about/House.png" class="mb-[52px] w-[60px]"/>
      <p class="text-paragraph mb-[42px] max-w-[496px] leading-[25px]">
        <split-text text="We empower clients to confidently achieve their real estate goals. Whether buying or selling, our professionals guide you through every step." separator="">
        </split-text><br/><br/>
        <split-text text="We are committed to providing unparalleled services that cater to the diverse needs of our esteemed clients, partners, and investors." separator="">
        </split-text>
      </p>
      <button
          class="p-btn h-[46px] flex items-center gap-2 bg-title text-white px-[25px] rounded-[50px] text-[15px] hover:bg-black">
        Our vision
        <CustomIcon name="next"/>
      </button>
      <nuxt-img src="/about/floor.png" class="mt-[46px] w-[261px]"/>
    </div>
<!--    <div class="w-full max-w-[620px]  flex items-center justify-center rounded-[20px]"-->
<!--         >-->
      <BlockPlayer src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                     :poster="ceo"
                     className="overflow-hidden bg-black rounded-[20px]"
                   style="box-shadow: 4px 11px 20px 0 #00000024;"
                   />
<!--    </div>-->
  </div>
</template>

<style scoped lang="scss">

</style>