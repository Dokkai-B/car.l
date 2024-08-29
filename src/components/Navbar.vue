<template>
  <header>
    <div class="page-indicator">{{ currentPageText }}</div>
    <nav class="nav-links">
      <router-link
        v-for="link in links"
        :key="link.id"
        :to="link.href"
        :class="['nav-link', { active: currentPage === link.id }]"
        @click="setCurrentPage(link.id)"
      >
        {{ link.text }}
      </router-link>
    </nav>
  </header>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      currentPage: '',
      links: [
        { id: 'me', text: '.me()', href: '/' },
        { id: 'portfolio', text: '.portfolio()', href: '/portfolio' },
        { id: 'contacts', text: '.contacts()', href: '/contacts' }
      ]
    };
  },
  computed: {
    currentPageText() {
      const currentLink = this.links.find(link => link.id === this.currentPage);
      return currentLink ? currentLink.text : '.me()';
    }
  },
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
    animatePageIndicator() {
      gsap.fromTo(
        ".page-indicator",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  },
  mounted() {
    this.currentPage = window.location.pathname.substring(1) || 'me';
    this.animatePageIndicator();
  },
  watch: {
    currentPage() {
      this.animatePageIndicator();
    }
  }
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 18%;
  position: fixed;
  top: 0;
  left: 0;
  width: 64%;
  background-color: #191D32;
  z-index: 1000;
  height: 80px; /* Fixed height for the navbar */
}

.page-indicator {
  color: #f1bf98;
  font-size: 1.5rem;
  margin-right: 20%;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #E3E2E2;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.4s ease;
}

.nav-link.active {
  color: #748CAB;
}

.nav-link:hover {
  color: #f1bf98;
}
</style>