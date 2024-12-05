<script setup lang="ts">
import CustomIcon from "~/components/base/CustomIcon.vue";
import TextAnimation from '@/components/TextAnimation.vue';
</script>

<template>
  <div class="w-full relative hero-image-box flex justify-center h-[518px]"
       >
    <div class="text-center md:pt-[134px] md:pb-[174px] py-[20px] w-full text-white" style="background: #00000099;">
      <h1 class="font-georgia text-[22px] md:text-[40px] mb-[15px] leading-[50px]">
        
        <TextAnimation text="Stay updated with us" />
      </h1>
      <p class="max-w-[615px] mx-auto">
        Subscribe to our social media to receive the latest real estate news, trends,
and exclusive property listings directly to your inbox.
      </p>
       <button
            class="pulse-button text-white  mt-[48px] mx-auto h-[46px] flex items-center gap-2  px-[25px] rounded-[50px] text-[15px] border-2 border-white">
         Subscribe now
          <CustomIcon name="next"/>
        </button>
    </div>

  </div>
</template>

<style scoped lang="scss">
.hero-image-box {
  background-image: url('~/assets/images/Subscribe.png');
  background-size: 100% 100%;
  background-position: center;
  transition: all 0.8s ease-in-out;
  background-repeat: no-repeat;

  &:hover {
    background-size: 110% 110%;
  }
}
</style>