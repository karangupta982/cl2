<template>
  <h1 class="main" ref="textElement">{{ text }}</h1>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  text: {
    type: String,
    
  },
});

const textElement = ref(null);
const isVisible = ref(false); // Track visibility for animation



function breakTheText() {
  const h1Text = textElement.value.textContent;
  const splittedText = h1Text.split('');
  const clutter = splittedText.map((elem) => `<span>${elem}</span>`).join('');
  textElement.value.innerHTML = clutter;
}

function animateText() {
    if (!isVisible.value) return;

  gsap.from("h1 span", {
    y: 100,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    scrollTrigger:{
                trigger:'.main',
                start:'top 90%',
                end:'top 50%',
                markers:true,
            }
   
  });
}

onMounted(() => {
  breakTheText();

  // Set up Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible.value) {
        isVisible.value = true; // Mark as visible
        animateText(); // Trigger animation
        observer.unobserve(entry.target); // Stop observing after animation
      }
      else if (!entry.isIntersecting) {
        isVisible.value = false; // Mark as not visible
      }
    });
  });

  if (textElement.value) {
    observer.observe(textElement.value); // Start observing the element
  }
});
</script>

<style scoped>
.main {
  display: inline-block;
  font-size: 40px;
}

h1 span {
  display: inline-block;
  font-size: 60px;
  font-family: Georgia;
  font-weight: bold;    
}

h1 {
  overflow: hidden;
}
</style>