
 <template>
  <div v-if="isLoading" class="preloader">
    <div class="content">
      <h2>SUJIMOTO</h2>
      <h2>SUJIMOTO</h2>
    </div>
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

    var tl = gsap.timeline();
        tl.to('.content', {delay: 3, opacity: 0, })
        .to('.shutter',{opacity:1,duration:0.2,height:0})
        .to('.preloader',{opacity:0,duration:0.1})
    
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); 
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
.shutter{
    position: absolute;
    opacity: 0;
    height: 100vh;
    width: 100vw;
    background: #000;
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



 








