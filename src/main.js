import { createApp } from 'vue';
import App from './App.vue';
import VueScrollReveal from 'vue-scroll-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router';

const app = createApp(App);

app.use(router);

app.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '50px',
  origin: 'top',
  easing: 'ease-in-out',
  mobile: true,
  reset: true,
});

app.mount('#app');

AOS.init(); // Ensure this is after the app is mounted