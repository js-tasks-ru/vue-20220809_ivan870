import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data () {
    return {
      numberOne: 0,
      numberTwo: 0,
      operatorActive: '',
    };
  },

  computed: {
    sample(a, b) {
      a = this.numberOne
      b = this.numberTwo
      if(this.operatorActive === "sum") {
        return  (a + b)
      }
      if(this.operatorActive === "subtract") {
        return (a - b)
      }
      if(this.operatorActive === "multiply") {
        return (a * b)
      }
      if(this.operatorActive === "divide") {
        return (a / b)
      }
    },
  },

});

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;
