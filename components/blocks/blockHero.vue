<template>
  <div class="hero-box sm:py-[52px] py-[16px] flex items-center flex-col-reverse md:flex-row justify-between px-4 w-full max-w-[1232px] mx-auto gap-[40px]">
    <div class="w-full max-w-[506px]">
      <h1 class="main font-bold text-[32px] md:text-[50px] leading-[40px] md:leading-[60px] mb-[13px] font-georgia ">
        Delivering top-tier real estate services
      </h1>
      <p class="text-paragraph mb-[42px] max-w-[390px] leading-[25px] p-title">
        <split-text text="At MKH Properties, we are setting new benchmarks in real estate." separator=""></split-text>
      </p>
      <button class="p-btn h-[46px] flex items-center gap-2 bg-title text-white px-[25px] rounded-[50px] text-[15px] hover:bg-black">
        Learn More
        <CustomIcon name="next"/>
      </button>
    </div>
    <div class="hero-image-box xl:h-[654px] sm:h-[350px] h-[250px] w-full"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'; // Import necessary functions
import SplitText from "~/components/base/SplitText.vue";

import CustomIcon from "~/components/base/CustomIcon.vue";

const { $gsap: gsap } = useNuxtApp();
const ctx = ref(null); // Initialize ctx as null

onMounted(() => {
  ctx.value = gsap.context((self) => {
    gsap.timeline()
      .from('.hero-image', {
        scale: 2,
      }).to('.hero-image', {
        scale: 1,
      });

    // New GSAP animation for the h1 text
    // function breakTheText() {
    //   let main = document.querySelector(".main");
    //   // const h1Text = main.textContent;
    //   const h1Text = "Delivering top-tier real estate services";
    //   const splittedText = h1Text.split("");
    //   let clutter = "";
    //   splittedText.forEach(function(elem) {
    //     clutter += `<span>${elem}</span>`;
    //   });
    //   main.innerHTML = clutter;
    // }

    function breakTheText() {
      const main = document.querySelector(".main");
      if (main) {
        const h1Text = "Delivering top-tier real estate services";
        const splittedText = h1Text.split("");
        let clutter = "";
        splittedText.forEach(function(elem) {
          clutter += `<span>${elem}</span>`;
        });

        const h1Element = document.querySelector('h1'); // Select h1 element
        if (h1Element) { // Check if h1Element is not null
          h1Element.innerHTML = clutter; // Set innerHTML only if h1Element is valid
        }
      }
    }

    breakTheText();

    gsap.from("h1 span", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      delay:7,
      scrollTrigger: {
        trigger: '.main',
        start: 'top 90%',
        end: 'top 50%',
       
      }
    });
  });
});

onUnmounted(() => {
  if (ctx.value) { // Check if ctx.value is defined before reverting
    ctx.value.revert();
  }
});
</script>

<style scoped lang="scss">
.hero-image-box {
  background-image: url('~/assets/images/hero.png');
  background-size: 100% 100%;
  background-position: center;
  border-radius: 20px;
  transition: all 0.8s ease-in-out;
  background-repeat: no-repeat;

  &:hover {
    background-size: 110% 110%;
  }
}

.main {
  display: inline-block;
  font-size: 40px;
  
}

h1 span {
  display: inline-block;
  font-size: 50px;
  font-family: Georgia;
  font-weight: bold;    
}

h1 {
  overflow: hidden;
  
}
</style>