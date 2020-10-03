<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#app {
  background-color: #000000;
  height: 100vh;
  width: 100%;
  display: border-box;
  font-family: "Rubik", sans-serif;
}

body {
  margin: 0;
}

html {
  background-color: #000000;
}
</style>
