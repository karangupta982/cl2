<template>
  <div class="my-[30px] px-4 w-full max-w-[1232px] mx-auto">
    <Carousel :value="products"
              :numVisible="5"
              :numScroll="1"
              circular
              class="own-carousel"
              :showIndicators="false"
              :showNavigators="false"
              :autoplayInterval="3000"
              :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="flex justify-center">
          <div class="bg-[#F0F0F0] rounded-[10px] h-[57px] w-[148px] flex items-center justify-center py-4"
               style="box-shadow: 4px 11px 20px 0px #00000012;">
            <nuxt-img :src="slotProps.data.img" alt="brand" fit="cover" height="20"/>
          </div>
        </div>

      </template>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
const products = ref([
  {img: '/brands/image 116.png'},
  {img: '/brands/image 117.png'},
  {img: '/brands/image 118.png'},
  {img: '/brands/image 119.png'},
  {img: '/brands/image 120.png'},
  {img: '/brands/image 116.png'},
  {img: '/brands/image 117.png'},
  {img: '/brands/image 118.png'},
  {img: '/brands/image 119.png'},
  {img: '/brands/image 120.png'},
]);
const responsiveOptions = ref([
  {
    breakpoint: '1150px',
    numVisible: 5,
    numScroll: 1
  },
  {
    breakpoint: '1099px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 2,
    numScroll: 1
  }
]);
</script>
<style scoped lang="scss">

</style>