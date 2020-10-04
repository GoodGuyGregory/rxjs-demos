<template>
  <div class="header">
    <img alt="rxjs logo" src="../assets/img/reactive-js-logo.png" />
    <router-link :to="{ name: 'DemoList' }"
      ><h2>ReactiveX Demos</h2></router-link
    >
  </div>
</template>

<script>


export default {
  name: "Header",
  components: {
    
  }
};
</script>
<style scoped>
h2 {
  color: #fff;
  font-family: "Rubik", sans-serif;
  font-size: 36px;
  margin-right: 15%;
  flex-basis: 2rem;
  padding: 25px 25px 5px;
}

img {
  border-radius: 50%;
  height: 250px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>