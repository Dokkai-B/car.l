<template>
  <div>
    <Navbar />
    <section class="section">
      <h1 id="heading1">car.l<span class="highlight">.me()</span></h1>
      <p id="paragraph1">Carl Patrick Adrian Aguas</p>
      <p id="paragraph2" class="gray">Full-stack Developer Intern</p>
    </section>

    <section class="section" id="portfolio">
      <h1 id="heading2">my.CV</h1>
      <p id="paragraph3">CV Link</p>
    </section>

    <section class="section" id="contacts">
      <h1 id="heading3">digital.arts<span class="highlight">(2015 - 2024)</span></h1>
    </section>

    <section class="section">
      <h1 id="heading4">From 2015 to 2021, I collaborated with various small to medium companies as a freelancer.</h1>
    </section>

    <section class="section">
      <p>Throughout these years I delivered multiple</p>
      <h1 id="heading4">digital graphics such as logo designs, product visuals, and custom promotional materials</h1>
      <p>for my direct clients.</p>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Navbar
  },
  mounted() {
    const sections = [
      { id: "#heading1", animation: { x: -50, opacity: 0 } },
      { id: "#paragraph1", animation: { y: 50, opacity: 0, delay: 0.2 } },
      { id: "#paragraph2", animation: { scale: 0.8, opacity: 0, delay: 0.4 } },
      { id: "#heading2", animation: { rotation: 45, opacity: 0 } },
      { id: "#paragraph3", animation: { x: 50, opacity: 0, delay: 0.2 } },
      { id: "#heading3", animation: { y: -50, opacity: 0 } },
      { id: "#paragraph4", animation: { scale: 1.2, opacity: 0, delay: 0.2 } }
    ];

    sections.forEach(section => {
      gsap.from(section.id, {
        duration: 1,
        ...section.animation,
        scrollTrigger: {
          trigger: section.id,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
      });
    });
  }
};
</script>

<style>
body {
  font-family: 'Roboto Mono', monospace;
  font-size: 100%;
  hyphens: auto;
  word-break: normal;
  margin: 0;
  padding: 0;
  margin-left: 25%;
  width: 70%;
  overflow-x: hidden;
  background-color: #191D32;
  color: #E3E2E2;
}

h1 {
  margin: 0;
  font-size: 4rem;
  margin-bottom: 0.3rem;
}

p {
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1rem;
}

.section {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 20px;
  flex-direction: column;
  padding-top: 100px; /* To avoid content being hidden behind the fixed header */
}

.highlight {
  color: #f1bf98;
}

.gray {
  color: #748CAB;
}
</style>