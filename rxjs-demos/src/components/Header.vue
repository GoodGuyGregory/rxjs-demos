<template>
  <div class="header">
    <img alt="rxjs logo" src="../assets/img/reactive-js-logo.png" />
    <h2>ReactiveX Demos</h2>
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
  padding: 25px;
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