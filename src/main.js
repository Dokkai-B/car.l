import { createApp } from 'vue';
import App from './App.vue';
import VueScrollReveal from 'vue-scroll-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.mount('#app');

AOS.init();


app.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '50px',
  origin: 'top', // This makes the content slide down from the top
  easing: 'ease-in-out', // Smooth easing for the animation
  mobile: true,
  reset: true, // Enables the reset of the animation when scrolling back up
});

app.mount('#app');
