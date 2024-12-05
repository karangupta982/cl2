<script setup lang="ts">
const img = useImage()
</script>

<template>
  <div class="w-full relative bg-center bg-no-repeat bg-cover flex justify-center"
       style="background-image: url(/mkh-city-bg.png)">
    <div class="text-center md:py-[100px] py-[20px] w-full text-white" style="background: #00000099;">
      <h1 class="font-georgia text-[22px] md:text-[40px] mb-3 leading-[44px]">The T.I.E Experience</h1>
      <p class="mb-[54px]">At MKH Properties, our core values are grounded in</p>
      <div class="flex justify-center flex-col md:flex-row items-center lg:gap-[55px] gap-[20px]">
        <div style="background: #0D0D0D80;border: 0.5px solid #FFFFFF"
             class="lg:w-[270px] lg:h-[270px]  w-[180px] h-[180px] flex justify-center items-center rounded-full font-georgia text-[18px]">
          Trustworthiness
        </div>
       <div style="background: #0D0D0D80;border: 0.5px solid #FFFFFF"
             class="lg:w-[270px] lg:h-[270px] w-[180px] h-[180px] flex justify-center items-center rounded-full font-georgia text-[18px]">Integrity</div>
        <div style="background: #0D0D0D80;border: 0.5px solid #FFFFFF"
             class="lg:w-[270px] lg:h-[270px] w-[180px] h-[180px] flex justify-center items-center rounded-full font-georgia text-[18px]">Excellence</div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>