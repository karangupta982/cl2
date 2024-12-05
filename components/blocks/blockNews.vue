<!--
<script setup lang="ts">
import CustomIcon from "~/components/base/CustomIcon.vue";
import TextAnimation from '@/components/TextAnimation.vue';

const products = ref([
  {
    id: 1,
    type: 'Special Offers',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated1.png'
  },
  {
    id: 2,
    type: 'News',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated2.png'
  },
  {
    id: 3,
    type: 'Blog',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated3.png'
  },
  {
    id: 4,
    type: 'Special Offers',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated1.png'
  },
  {
    id: 5,
    type: 'News',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated2.png'
  },
  {
    id: 6,
    type: 'Blog',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated3.png'
  },
  {
    id: 7,
    type: 'Special Offers',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated1.png'
  },
  {
    id: 8,
    type: 'News',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated2.png'
  },
  {
    id: 9,
    type: 'Blog',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus ac ullamcorper tempus ac, ut dolor nunc imperdiet.',
    img: 'updated3.png'
  },
])
const currentCategory = ref('');
const filteredProduct = computed(
    () => {
      if (currentCategory.value) {
        return products.value.filter(p => p.type === currentCategory.value)
      } else {
        return products.value
      }
    }
)
const responsiveOptions = ref([
  {
    breakpoint: '1150px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1099px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<template>
  <div class="sm:py-[52px] py-[16px]  px-4 w-full max-w-[1232px] mx-auto gap-[40px]">
    <h1 class="font-georgia text-center text-[30px] md:text-[40px] leading-[50px] mb-[38px]">Stay Updated
    <div class="mb-[68px] flex justify-center gap-7 flex-wrap">
      <button class="px-[25px] h-[49px] rounded-[10px]"
              @click="currentCategory=''"
              :class="currentCategory===''?'bg-title text-white':'bg-white text-paragraph'">All
      </button>
      <button class="px-[25px] h-[49px] rounded-[10px]"
              @click="currentCategory='Special Offers'"
              :class="currentCategory==='Special Offers'?'bg-title text-white':'bg-white text-paragraph'">Special Offers
      </button>
      <button class="px-[25px] h-[49px] rounded-[10px]"
              @click="currentCategory='Blog'"
              :class="currentCategory==='Blog'?'bg-title text-white':'bg-white text-paragraph'">Blog
      </button>
      <button class="px-[25px] h-[49px] rounded-[10px]"
              @click="currentCategory='News'"
              :class="currentCategory==='News'?'bg-title text-white':'bg-white text-paragraph'">News
      </button>
    </div>
    <Carousel :value="filteredProduct"
              :numVisible="3"
              :numScroll="1"
              circular
              :showIndicators="false"
              :showNavigators="false"
              :autoplayInterval="5000"
              v-if="filteredProduct"
              :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="flex flex-col max-w-[335px] w-full xl:mx-0 mx-auto">
          <div class="w-full overflow-hidden h-fit">
            <nuxt-img :src="'/'+slotProps.data.img" alt="brand" fit="cover"
                      class="transition-all w-full h-full hover:scale-105 duration-700"/>
          </div>
          <h6 class="mt-[22px] mb-[11px] font-georgia text-primary text-[13px]">{{ slotProps.data.type }}</h6>
          <p class="line-clamp-3 font-normal leading-[22px]">{{ slotProps.data.description }}</p>
        </div>

      </template>
    </Carousel>
    <button
        class="pulse-button text-title  mt-[72px] mx-auto h-[46px] flex items-center gap-2  px-[25px] rounded-[50px] text-[15px] border-2 border-[#0D0D0D]">
      View More
      <CustomIcon name="next"/>
    </button>
  </div>
</template>

<style scoped lang="scss">

</style>  -->





<template>
  <div class="hero-box sm:py-[52px] py-[16px] flex items-center flex-col-reverse md:flex-row justify-between px-4 w-full max-w-[1232px] mx-auto gap-[40px]">
    <div class="w-full max-w-[506px]">
      <h1 class="main font-bold text-[32px] md:text-[50px] leading-[40px] md:leading-[60px] mb-[13px] font-georgia">
        Stay &nbsp; Updated
      </h1>
      <p class="text-paragraph mb-[42px] max-w-[390px] leading-[25px] p-title">
        At MKH Properties, we are setting new benchmarks in real estate.
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
import { ref, onMounted, onUnmounted } from 'vue';
import CustomIcon from "~/components/base/CustomIcon.vue";

const { $gsap: gsap } = useNuxtApp();
const ctx = ref(null);

onMounted(() => {
  ctx.value = gsap.context(() => {
    // GSAP animation for the hero image
    gsap.from('.hero-image-box', {
      scale: 2,
      duration: 1,
      onComplete: function() {
        gsap.to('.hero-image-box', {
          scale: 1,
          duration: 1
        });
      }
    });

    // New GSAP animation for the h1 text
    const h1 = document.querySelector(".main");
    function breakTheText() {
      const h1Text = h1.textContent;
      const splittedText = h1Text.split("");
      let clutter = "";
      splittedText.forEach(function(elem) {
        clutter += `<span>${elem}</span>`;
      });
      h1.innerHTML = clutter;
    }
    breakTheText();

    gsap.from("h1 span", {
      y: 40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.main',
        start: 'top 90%',
        end: 'top 50%',
        markers: true, // Set to true for debugging
      }
    });
  });
});

onUnmounted(() => {
  if (ctx.value) {
    ctx.value.revert();
  }
});
</script>

<style scoped lang="scss">
.hero-image-box {
  background-image: url('~/assets/images/hero.png'); /* Update with your image path */
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
  background: orange;
}

h1 span {
  display: inline-block;
  font-size: 50px;
  font-family: Georgia;
  font-weight: bold;    
}

h1 {
  overflow: hidden;
  background: skyblue;
}
</style>