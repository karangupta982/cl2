<template>
  <div class="bg-[#34944F26]">
    <div
        class="flex flex-col lg:flex-row gap-[30px] justify-between px-4 w-full max-w-[1232px] mx-auto lg:pt-[93px] lg:pb-[99px] py-[40px] items-center app-footer">
      <div class="flex-1 max-w-[373px]">
        <img src="/logo.png" class="h-[90px] mb-7 mx-auto sm:mx-0" alt="logo"/>
        <p class="text-title mb-7 text-center sm:text-left">We are changing the perspectives on real estate in Nigeria, one property at a time. </p>
        <button
            class="mx-auto sm:mx-0 p-btn h-[46px] flex items-center gap-2 bg-title text-white px-[25px] rounded-[50px] text-[15px] hover:bg-black">
          Send Message
          <CustomIcon name="next"/>
        </button>
      </div>

      <div class="max-w-[684px] sm:gap-[143px] gap-[30px] w-full">
        <div class="flex flex-col sm:flex-row sm:justify-end justify-center items-center sm:gap-[56px] gap-[16px] uppercase">
          <nuxt-link to="/" class="px-3 ">Projects</nuxt-link>
          <nuxt-link to="/#" class="px-3">About</nuxt-link>
          <nuxt-link to="/#" class="px-3">Contact</nuxt-link>
        </div>
        <div class="sm:mt-[66px] mt-[20px] flex justify-between flex-col sm:flex-row gap-[20px]">
          <div class="sm:text-right text-center">
            <h6 class="font-bold mb-5">Contact Us</h6>
            <ul class="font-normal">
              <li class="mb-1">0702 512 0073</li>
              <li class="mb-1">0913 304 6262</li>
              <li class="mb-1">0703 298 6725</li>
              <li class="mb-1">info@mkhinvestment.com</li>
            </ul>
          </div>

          <div class="sm:text-right text-center">
            <h6 class="font-bold mb-5">Lagos Office</h6>
            <ul class="font-normal">
              <li class="mb-1">MKH Building,</li>
              <li class="mb-1">Eleganza Complex, </li>
              <li class="mb-1">Opposite VGC, Lekki,</li>
              <li class="mb-1">Lagos.</li>
              <li class="mt-4 flex items-center sm:justify-end justify-center gap-[10px] text-[#34944F] font-extralight">
                <CustomIcon name="direction"></CustomIcon> GET DIRECTION
              </li>
            </ul>
          </div>
          <div class="sm:text-right text-center">
            <h6 class="font-bold mb-5">Ibadan Office</h6>
            <ul class="font-normal">
              <li class="mb-1">138, Liberty Stadium</li>
              <li class="mb-1">Road, Off Ring Road, </li>
              <li class="mb-1">Ibadan.</li>
              <li class="mt-[42px] flex items-center sm:justify-end justify-center gap-[10px] text-[#34944F] font-extralight">
                <CustomIcon name="direction"></CustomIcon> GET DIRECTION
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import CustomIcon from "~/components/base/CustomIcon.vue";


const menu = ref();
const items = ref([
  {
    label: 'List'
  },
  {
    label: 'Gallery'
  }
]);
const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<style scoped lang="scss">

</style>