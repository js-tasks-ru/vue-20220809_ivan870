import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data () {
    return {
      numberOne: 0,
      numberTwo: 0,
      operatorActive: '',
      result: 0,
    };
  },

  computed: {
    sample(a, b) {
      a = this.numberOne
      b = this.numberTwo
      if(this.operatorActive === "sum") {
        return this.result = (a + b)
      }
      if(this.operatorActive === "subtract") {
        return this.result = (a - b)
      }
      if(this.operatorActive === "multiply") {
        return this.result = (a * b)
      }
      if(this.operatorActive === "divide") {
        return this.result = (a / b)
      }
    },
  },
  methods: {

  },

});

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;
