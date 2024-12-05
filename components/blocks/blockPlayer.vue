<script setup lang="ts">
import CustomIcon from "~/components/base/CustomIcon.vue";

const playing = ref(false)
const control = ref(false)
const player = ref(false)
const props = defineProps({
  src: {
    type: String,
    default: ''
  }, poster: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  className: {
    type: String,
    default: '100%'
  }
})
 const onPlayerPause=()=> {
      playing.value=false
      control.value=false
    }
</script>

<template>
  <div class="relative flex items-center justify-center w-full" :class="className">
    <video
        :class="playing?'playing':''"
        :src="src"
        :muted="true"
        :autoplay="false"
        :controls="control"
        :loop="false"
        :width="width"
        :poster="poster"
        :preload="true"
        :playsinline="true"
        ref="player"
        @pause="onPlayerPause"
    />
    <CustomIcon name="play"
                class="absolute z-[10px] cursor-pointer"
                @click="$refs.player.play();playing=true;control=true"
                v-if="!playing"/>
  </div>

</template>

<style lang="scss">
video{
  object-fit: cover;
  height: 100%;
  &.playing{
    height: auto;
  }
}
</style>