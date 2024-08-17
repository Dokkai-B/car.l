<template>
    <div id="app">
      <section class="section">
        <h1 data-aos="fade-up" data-aos-duration="1000">car.l.me()</h1>
        <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Your Name</h2>
        <h3 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Preferred Position/Job</h3>
      </section>
  
      <section class="section">
        <h2 data-aos="fade-up" data-aos-duration="1000">myCV(/^\.\*$/gi)</h2>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Showcase your CV here...</p>
      </section>
  
      <section class="section">
        <h2 data-aos="fade-up" data-aos-duration="1000">Work Showcase</h2>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Highlight your work here...</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      AOS.init(); // Initialize AOS
    },
  };
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
  
  .section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  h1, h2, h3 {
    margin: 0;
  }
  
  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  
  h3 {
    font-size: 2rem;
  }
  </style>
  