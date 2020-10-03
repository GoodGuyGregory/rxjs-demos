<template>
  <div id="Container">
    <h2>Guides</h2>
    <hr />
    <h3>Observables</h3>
    <ul>
      <li>Creating an Observable</li>
      <li>Subscribing</li>
    </ul>
    <h3>RxJs Operators</h3>
    <ul>
      <li>.first() .last()</li>
      <li>.catch()</li>
      <li>.retry()</li>
      <li>.map()</li>
      <li>.do()</li>
      <li>.filter()</li>
      <li>.debounce()</li>
      <li>.throttle()</li>
      <li>.scan()</li>
      <li>.switchMap()</li>
      <li>.takeUntil()</li>
      <li>.takeWhile()</li>
      <li>.zip()</li>
      <li>.forkJoin()</li>
    </ul>
  </div>
</template>

<script>


export default {
  name: "DemoList",
  components: {
    
  }
};
</script>

<style scoped>
#Container {
  border-radius: 25px;
  background-color: #f3f3f3;
  padding: 50px;
  margin: 4em;
}

h2 {
  color: #000000;
}
</style>
