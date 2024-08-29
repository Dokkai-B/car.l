<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
/* Global styles here */
body {
  font-family: 'Roboto Mono', monospace;
  font-size: 100%;
  hyphens: auto;
  word-break: normal;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #191D32;
  color: #E3E2E2;
}

#app {
  margin-left: 16%; /* Adjust this value based on your layout */
  width: 70%; /* Adjust this value based on your layout */
}

.main-content {
  padding-top: 100px; /* Adjust this value based on the height of your navbar */
}
</style>