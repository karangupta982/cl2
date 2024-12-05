
<template>
    <div v-if="isLoading" class="preloader">
      <div class="content">
        <h2>SUJIMOTO</h2>
        <h2>SUJIMOTO</h2>
      </div>
      <div class="main2 "><h2>FORGET ANY NOTION OF LUXURY YOU'VE EVER HAD!</h2></div>
    </div>
    <div class="shutter"></div>
  </template>
  
  <script>
  import {gsap} from 'gsap'; 

    
  export default {
    data() {
      return {
        isLoading: true,
      };
    },

     
    mounted() {

      const showVideo = ref(''); // Initialize showVideo as a ref 
      const isFirstVisit = ref(false);

      if (process.client) {
      showVideo.value = localStorage.getItem('showIntro') || '';
      isFirstVisit.value = !localStorage.getItem('hasVisited'); // Check if user is visiting for the first time

      if (isFirstVisit.value) {
        localStorage.setItem('hasVisited', 'true'); // Set flag for future visits
      }
    }
  
    
        var tl = gsap.timeline();
        tl.to('.content', {delay: 3, opacity: 0, })
        .to('.main2',{opacity:1,duration:3})
        .to('.preloader',{opacity:0,duration:0.1})
        .to('.shutter',{opacity:1,duration:0.4,height:0})
        // .to('shutter',{opacity:0})
      setTimeout(() => {
        this.isLoading = false;
      }, 7000); 
    },
  };
  </script>
  
  <style scoped>
  * {

    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  .shutter{
    position: absolute;
    opacity: 0;
    height: 100vh;
    width: 100vw;
    background: #000;
  }
  .main2{
    opacity: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .content {
    position: relative;
  }
  
  .content h2 {
    position: absolute;
    font-size: 4em;
    transform: translate(-50%, -50%);
    font-weight: 700;
  }
  
  .content h2:nth-child(1) {
    color: transparent; 
    -webkit-text-stroke: 1px rgb(205, 146, 35); 
    opacity: 0.4; 
  }
  
  .content h2:nth-child(2) {
    color: orange; 
    animation: animate 4s forwards; 
  }
  
  
  @keyframes animate {
      0% {
          clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
      }
      20% {
          clip-path: polygon(0% 80%, 100% 80%, 100% 100%, 0% 100%);
      }
      40% {
          clip-path: polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%);
      }
      60% {
          clip-path: polygon(0% 40%, 100% 40%, 100% 100%, 0% 100%);
      }
      80% {
          clip-path: polygon(0% 20%, 100% 20%, 100% 100%, 0% 100%);
      }
      100% {
          clip-path: polygon(0% 0%);
      }
  }
    
  </style> 
  