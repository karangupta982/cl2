<template>
  <div
    class="flex justify-between px-4 w-full max-w-[1232px] mx-auto h-[89px] items-center app-header"
  >
    <img src="/logo.png" class="h-[44px]" alt="logo" />
    <div class="flex items-center gap-3">
      <nuxt-link to="/" class="px-3">Home</nuxt-link>
      <nuxt-link to="/about" class="px-3">About</nuxt-link>
      <button
        type="button"
        @click="toggle"
        class="flex items-center gap-2 h-[45px]"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      >
        Products <CustomIcon name="down" />
      </button>
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      <nuxt-link to="#" class="px-3">Blog</nuxt-link>
      <nuxt-link to="#" class="px-3">Contact</nuxt-link>
      <button class="border-[2px] border-title h-[45px] px-[25px] rounded-[50px]">
        Book Inspection
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import CustomIcon from "~/components/base/CustomIcon.vue";
const menu = ref();
const items = ref([
  {
    label: "List",
  },
  {
    label: "Gallery",
  },
]);
const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<style scoped lang="scss"></style>
