<template>
<div>
  <div class="w-full relative hero-image-box flex justify-center rounded-[8px] overflow-hidden"
       :style="`background-image:url(${src});box-shadow: 4px 11px 20px 0px #00000024;`"
       :class="className"
  >
    <div style="background: #00000033;" class="w-full flex">
      <div class="w-full mt-auto flex justify-between items-center mb-9 px-6 flex-wrap">
         <h6  class="text-white font-georgia text-[30px]">{{title}}</h6>
       <button class="pulse-button text-white h-[46px] flex items-center gap-2  px-[25px] rounded-[50px] text-[15px] border-2 border-white">
      {{btnTitle}}
       </button>
      </div>

    </div>

  </div>
</div>
</template>

<script setup lang="ts">
import CustomIcon from "~/components/base/CustomIcon.vue";

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: '100%'
  },
  btnTitle: {
    type: String,
    default: 'view More'
  },
  to: {
    type: String,
    default: '/'
  },
  className: {
    type: String,
    default: ''
  }
})
</script>


<style scoped lang="scss">
.hero-image-box {
  background-size: 100% 100%;
  background-position: center;
  border-radius: 20px;
  transition: all 0.8s ease-in-out;
  background-repeat: no-repeat;

  &:hover {
    background-size: 110% 110%;
  }
}
</style>