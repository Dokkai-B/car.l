<template>
    <section class="header-section">
      <div class="header-content v-scroll-reveal">
        <div class="title">
          <h1 class="site-name">car.l.me()</h1>
          <h2 class="name">Your Name</h2>
          <h3 class="role">Creative Frontend Developer</h3>
        </div>
        <nav class="navigation">
          <a href="#" class="nav-link">.about()</a>
          <a href="#" class="nav-link">.projects()</a>
          <a href="#" class="nav-link">.contact()</a>
        </nav>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "HeaderSection",
  };
  </script>
  
  <style scoped>
  .header-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a0a0a;
    color: #f5f5f5;
  }
  
  .header-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    max-width: 1200px;
    width: 100%;
    position: relative;
    opacity: 0; /* Initially hidden */
    transform: translateY(-20px); /* Slide up a bit initially */
    transition: opacity 1s ease-in-out, transform 1s ease-in-out; /* Smooth fade and slide */
  }
  
  .header-content.v-scroll-reveal {
    opacity: 1; /* Fade in */
    transform: translateY(0); /* Slide down to its original position */
  }
  
  .title {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .site-name {
    font-size: 4rem;
    font-weight: bold;
    color: #ffffff;
  }
  
  .name {
    font-size: 1.5rem;
    color: #bfbfbf;
  }
  
  .role {
    font-size: 1.25rem;
    color: #7a7a7a;
  }
  
  .navigation {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .nav-link {
    color: #888;
    margin-left: 20px;
    font-size: 1rem;
    text-decoration: none;
  }
  
  .nav-link:hover {
    color: #ffffff;
  }
  </style>
  