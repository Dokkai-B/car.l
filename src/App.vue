<template>
  <div id="app">
    <section class="section">
      <div class="intro">
        <h1 data-aos="fade-up" data-aos-duration="1000">car.l<span class="highlight">.me()</span></h1>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Carl Patrick Adrian Aguas</p>
        <p class = "gray" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Full-stack Developer Intern</p>
      </div>
    </section>

    <section class="section">
      <h1 data-aos="fade-right" data-aos-duration="1000">myCV(/^\.\*$/gi)</h1>
      <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">Showcase your CV here...</p>
    </section>

    <section class="section">
      <h1 data-aos="zoom-in" data-aos-duration="1000">Work Showcase</h1>
      <p data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">Highlight your work here...</p>
    </section>
  </div>
</template>

<!-- <script>
export default {
  // No need to re-initialize AOS here since it's done globally
};
</script> -->

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
  /* overflow-y: hidden; */
  background-color: #191D32;
  color: white;
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
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 20px;
}

.highlight {
  color: #f1bf98;
}
.intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.gray {
  color: #748CAB;
}
</style>