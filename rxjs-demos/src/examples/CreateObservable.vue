<template>
  <div id="Examples">
    <h2>Creating an Observable</h2>
    <a href="http://">Documentation</a>
    <p>
      Observables are used to observe changes in other components and take note
      of them.
    </p>
    <p>
      They might for example watch data from an API call. this data can then be
      returned to components which subscribe to them.
    </p>
    <p>
      Observables will generally hold asynchronously recieved data so it is a
      good idea to subscribe to them in order to keep recieving active data. if
      your subscription isn't terminated in your applications it can produce a
      memory leak.
    </p>

    <h3>Code Example</h3>
  </div>
</template>

<script>
export default {
  name: "CreateObservable",
  components: {
    
  }
};
</script>

<style scoped>
#Examples {
  border-radius: 25px;
  background-color: #f3f3f3;
  padding: 50px;
  margin: 4em;
}

h2 {
  color: rgb(94, 13, 225);
}

#Container {
  border-radius: 25px;
  background-color: #f3f3f3;
  padding: 50px;
  margin: 4em;
}

h2 {
  color: #000000;
}

li {
  padding: 5px;
  margin: 7px;
}

a {
  color: rgb(94, 13, 225);
}

a:hover {
  color: rgb(190, 13, 225);
}
</style>
