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

    <p>create a print method for your project's html</p>
    <pre v-highlightjs><code class="javascript"> function print(val) {
        let example = document.createElement('p');
        example.innerText = val;
        document.body.appendChild(example)
    }</code></pre>
    <p>create the observer to append data to the DOM</p>
    <pre v-highlightjs><code class="javascript"> 
         // creates an observable:
         // the next method controls that the observer will emit, t
         //his can be data or in this case a string
         const observable = Rx.Observable.create( observer => {
             observer.next( 'hello' )
             observe.next( 'world' )
         }

         // in order to emit values from the observer. 
         //objects wishing to use the data must subscribe 
         //to the data stream emitted
         observer.subscribe( val => print())

         </code></pre>
  </div>
</template>

<script>
import Vue from 'vue'
import hljs from 'highlight.js'

Vue.directive('highlightjs', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
});
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

.javascript {
  border-radius: 15px;
  padding: 20px;
}

a {
  color: rgb(94, 13, 225);
}

a:hover {
  color: rgb(190, 13, 225);
}
</style>
