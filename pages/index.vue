<template>
  <div>

    <PreLoader2 v-if="isFirstVisit && showVideo === ''" />
    <PreLoader v-else />
        <section class="section">
    <BlockHero/>
        </section>
    <section class="section">
      <BlockBrands/>
    </section>
    <section class="section">
      <div
          class="sm:py-[52px] py-[16px] flex items-center flex-col sm:flex-row justify-between px-4 w-full max-w-[1232px] mx-auto md:gap-[40px] gap-[16px]">
        <div class="flex-1">
          <h1 class="font-georgia text-[22px] md:text-[40px] leading-[30px] md:leading-[50px] max-w-[395px] main">
            Changing the perspectives on real estate
          </h1>
        </div>

        <div class="flex-1">
          <p class="text-paragraph">With a proven track record of excellence, MKH Properties specialize in real estate
            development, sales, facility management, real estate consultancy,
            and surveying.</p>
          <button
              class="pulse-button text-title  mt-5 h-[46px] flex items-center gap-2  px-[25px] rounded-[50px] text-[15px] border-2 border-[#0D0D0D]">
            Get to know us
            <CustomIcon name="next"/>
          </button>
        </div>
      </div>
    </section>
    <section class="section">
      <div
          class=" sm:py-[52px] py-[16px] flex items-center flex-col sm:flex-row justify-between px-4 w-full max-w-[1232px] mx-auto md:gap-[40px] gap-[16px]">
        <BlockPlayer src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                     poster="/overlay.png"
                     className="rounded-[20px] overflow-hidden" style="box-shadow: 4px 11px 20px 0px #00000024;"/>
      </div>
    </section>
    <section class="section">
      <BlockExperience/>
    </section>
    <section class="section">
      <div
          class="sm:py-[52px] py-[16px] flex items-center flex-col sm:flex-row justify-between px-4 w-full max-w-[1232px] mx-auto md:gap-[40px] gap-[16px]">
        <div class="flex-1">
          <h6 class="font-georgia text-[22px] md:text-[40px] leading-[30px] md:leading-[50px] max-w-[605px]">
            <TextAnimation text="Start your home ownership journey here" />
          </h6>
        </div>

        <div class="flex-1 flex justify-end items-center">
          <button
              class="pulse-button text-title h-[46px] flex items-center gap-2  px-[25px] rounded-[50px] text-[15px] border-2 border-[#0D0D0D]">
            Explore more
            <CustomIcon name="next"/>
          </button>
        </div>
      </div>
    </section>
    <section class="section">
      <div
          class="sm:py-[52px] py-[16px] flex items-center flex-col sm:flex-row justify-between px-4 w-full max-w-[1232px] mx-auto lg:gap-[54px] gap-[16px]">
        <div class="w-full max-w-[408px]">
          <CategoryCard title="Residential" btn-title="Explore More" src="/residential.png"
                        class-name="md:h-[484px] h-[220px]"/>
        </div>
        <div class="flex-1 min-w-[50%]">
          <CategoryCard title="Commercial" btn-title="Explore More" src="/commercial.png"
                        class-name="md:h-[484px] h-[220px]"/>
        </div>
      </div>
    </section>
    <section class="section">
      <BlockNews/>
    </section>
    <section class="section">
      <BlockStay/>
    </section>
  </div>
</template>
<!-- <script setup>
const {$gsap: gsap} = useNuxtApp();
import BlockHero from "~/components/blocks/blockHero.vue";
import TextAnimation from '@/components/TextAnimation.vue';
import BlockBrands from "~/components/blocks/blockBrands.vue";
import CustomIcon from "~/components/base/CustomIcon.vue";
import BlockPlayer from "~/components/blocks/blockPlayer.vue";
import BlockExperience from "~/components/blocks/blockExperience.vue";
import CategoryCard from "~/components/cards/CategoryCard.vue";
import BlockNews from "~/components/blocks/blockNews.vue";
import BlockStay from "~/components/blocks/blockStay.vue";
import PreLoader from "~/components/PreLoader.vue";
import PreLoader2 from "~/components/PreLoader2.vue";

const showVideo = process.server ? ref('') : ref(localStorage.getItem('showIntro'))
// const showVideo = process.server ? ref('') : ref(localStorage.getItem('showIntro'));
const isFirstVisit = ref(!localStorage.getItem('hasVisited'));

if (isFirstVisit.value) {
  localStorage.setItem('hasVisited', 'true');
  PreLoader2();
} else {
  PreLoader();
}




definePageMeta({
  // middleware: "auth",
  layout: "default",
});
const ctx = ref();

onMounted(() => {
  // window.scrollTo(0,0);
  if(showVideo.value==='skip') {
    ctx.value = gsap.context((self) => {
      const sections = gsap.utils.toArray('.section');
      sections.forEach((section, index) => {
        const titles = section.querySelectorAll('.p-title')
        gsap.fromTo(section,
            {scale: 0.8, opacity: 0},
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: 'power2.out', 
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom 80%',
                scrub: true,
                // markers: true
              }
            }
        );
        if (titles) {
          titles.forEach((section, index) => {
            const char = section.querySelectorAll('.lines, words,chars')
            // let splitext = new SplitText(title, {type: "words,lines,chars"});
            // const chars = splitext.chars;
            console.log(char)
            gsap.fromTo(char, {
                  y: 100,
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.05,
                  duration: 2,
                  ease: 'power4.out'
                })
          })
        }
      })
    });
  }
});

onUnmounted(() => {
  ctx.value.revert();
});
</script> -->

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const { $gsap: gsap } = useNuxtApp();

import BlockHero from "~/components/blocks/blockHero.vue";
import TextAnimation from '@/components/TextAnimation.vue';
import BlockBrands from "~/components/blocks/blockBrands.vue";
import CustomIcon from "~/components/base/CustomIcon.vue";
import BlockPlayer from "~/components/blocks/blockPlayer.vue";
import BlockExperience from "~/components/blocks/blockExperience.vue";
import CategoryCard from "~/components/cards/CategoryCard.vue";
import BlockNews from "~/components/blocks/blockNews.vue";
import BlockStay from "~/components/blocks/blockStay.vue";
import PreLoader from "~/components/PreLoader.vue";
import PreLoader2 from "~/components/PreLoader2.vue";


// const showVideo = process.server ? ref('') : ref(localStorage.getItem('showIntro'));
// const isFirstVisit = ref(!localStorage.getItem('hasVisited')); // Check if user is visiting for the first time

// if (isFirstVisit.value) {
//   localStorage.setItem('hasVisited', 'true'); // Set flag for future visits
// }


// const showVideo = ref('');
// const isFirstVisit = ref(false);

// Check if we are in the client environment before accessing localStorage
// if (process.client) {
//   showVideo.value = localStorage.getItem('showIntro') || '';
//   isFirstVisit.value = !localStorage.getItem('hasVisited');

//   if (isFirstVisit.value) {
//     localStorage.setItem('hasVisited', 'true');
//     PreLoader2();
//   } else {
//     PreLoader();
//   }
// }



// if (process.client) {
//   showVideo.value = localStorage.getItem('showIntro') || '';
//   // isFirstVisit.value = !localStoryage.getItem('hasVisited');

//   if (showVideo.value == '') {
//     // localStorage.setItem('hasVisited', 'true');
//     // PreLoader2();
//     isFirstVisit = false;
    
//   } else {
//     // PreLoader();
//     isFirstVisit = true;
//   }
// }


// Check if we are in the client environment before accessing localStorage
// if (process.client) {
//   isFirstVisit.value = !localStorage.getItem('hasVisited');
  
//   if (isFirstVisit.value) {
//     localStorage.setItem('hasVisited', 'true');
//   }
// }




definePageMeta({
  layout: "default",
});

const ctx = ref();

const showVideo = ref(''); // Initialize showVideo as a ref
const isFirstVisit = ref(false); 

onMounted(() => {


  var h1 = document.querySelector(".main")

function breakTheText(){
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")
    var clutter = ""

    splittedText.forEach(function(elem,ind){
        clutter += `<span >${elem}</span>`
    })

    h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 span", {
    y: 40,
    opacity:0,
    duration: 0.3,
    stagger: 0.05,
    scrollTrigger:{
        trigger:'.main',
        start:'top 90%',
        end:'top 50%',
        markers:true,
        scrub:3,
    }
});





  if (process.client) {
      showVideo.value = localStorage.getItem('showIntro') || '';
      isFirstVisit.value = !localStorage.getItem('hasVisited'); // Check if user is visiting for the first time

      if (isFirstVisit.value) {
        localStorage.setItem('hasVisited', 'true'); // Set flag for future visits
      }
    }
  


  if (showVideo.value === 'skip') {
    ctx.value = gsap.context((self) => {
      const sections = gsap.utils.toArray('.section');
      sections.forEach((section) => {
        const titles = section.querySelectorAll('.p-title');
        gsap.fromTo(section,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom 80%',
              scrub: true,
            }
          }
        );

        if (titles) {
          titles.forEach((title) => {
            const char = title.querySelectorAll('.lines, words, chars');
            gsap.fromTo(char, {
              y: 100,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 2,
              ease: 'power4.out'
            });
          });
        }
      });
    });
  }
});

onUnmounted(() => {
  ctx.value.revert();
});
</script>

<style lang="scss" scoped>

.main{
            display: inline-block;
            font-size: 40px;
            
        }

        h1 span{
            display: inline-block;
            font-size: 50px;
            font-family: Georgia;
            font: bold; 

        }
        h1{
            overflow: hidden;
            
        }


</style>
