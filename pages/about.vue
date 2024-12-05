<template>
  <div>
    <section class="section">
      <div
          class="sm:py-[52px] py-[16px]  px-4 w-full max-w-[1232px] mx-auto">
        <div class="flex items-center justify-center text-white h-[449px] hero-image-box"
        >
          <div class="text-center">
            <h6 class="font-georgia text-[40px]">Our Journey</h6>
            <button
                class="pulse-button text-white mx-auto  mt-[30px] h-[46px] flex items-center gap-2  px-[25px] rounded-[50px] text-[15px] border-2 border-white">
              Learn More
              <CustomIcon name="next"/>
            </button>
          </div>

        </div>
      </div>
    </section>
    <section class="section">
      <BlockAboutVision/>
    </section>
    <section class="section">
      <BlockAboutMission/>
    </section>
    <section class="section">
      <div
          class="sm:py-[52px] py-[16px]  px-4 w-full max-w-[1232px] mx-auto">
        <div class="flex flex-wrap gap-[50px] items-center justify-center">
          <div class="px-[36px] py-[28px] bg-[#F3F3F3] shadow-box hover:shadow-none rounded-[20px]"
               >
            <h6 class="text-black text-[50px]">90+</h6>
            <p>Satisfied Clients</p>
          </div>
          <div class="px-[36px] py-[28px] bg-[#F3F3F3] shadow-box hover:shadow-none rounded-[20px]">
            <h6 class="text-black text-[50px]">45+</h6>
            <p>Completed Projects</p>
          </div>
          <div class="px-[36px] py-[28px] bg-[#F3F3F3] shadow-box hover:shadow-none rounded-[20px]">
            <h6 class="text-black text-[50px]">09+</h6>
            <p>Ongoing Project</p>
          </div>
          <div class="px-[36px] py-[28px] bg-[#F3F3F3] shadow-box hover:shadow-none rounded-[20px]">
            <h6 class="text-black text-[50px]">50+</h6>
            <p>People Empowered</p>
          </div>
        </div>

      </div>
    </section>
    <section class="section">
      <BlockExperience/>
    </section>
    <section class="section">
      <BlockBrands/>
    </section>
    <section class="section bg-white">
      <BlockCommitment/>
    </section>
     <section class="section">
      <BlockTeam/>
    </section>
  </div>
</template>
<script setup>
import BlockAboutVision from "~/components/blocks/blockAboutVision.vue";

const {$gsap: gsap} = useNuxtApp();
import BlockHero from "~/components/blocks/blockHero.vue";
import BlockBrands from "~/components/blocks/blockBrands.vue";
import CustomIcon from "~/components/base/CustomIcon.vue";
import BlockPlayer from "~/components/blocks/blockPlayer.vue";
import BlockExperience from "~/components/blocks/blockExperience.vue";
import CategoryCard from "~/components/cards/CategoryCard.vue";
import BlockNews from "~/components/blocks/blockNews.vue";
import BlockStay from "~/components/blocks/blockStay.vue";
import BlockAboutMission from "~/components/blocks/blockAboutMission.vue";
import BlockCommitment from "~/components/blocks/blockCommitment.vue";
import BlockTeam from "~/components/blocks/blockTeam.vue";

const showVideo = process.server ? ref('') : ref(localStorage.getItem('showIntro'))
definePageMeta({
  // middleware: "auth",
  layout: "default",
});
const ctx = ref();

onMounted(() => {
  // window.scrollTo(0,0);
  if (showVideo.value === 'skip') {
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
            const char = section.querySelectorAll('.line')
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
</script>
<style lang="scss" scoped>
.hero-image-box {
  background-image: url('~/assets/images/about/hero.png');
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
