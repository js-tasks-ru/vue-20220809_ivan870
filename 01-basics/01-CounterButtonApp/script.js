import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',

  data () {
    return {
      numberClick: 0,
    };
  },

  methods: {
    increaseNumber() {
      return this.numberClick++
    },
  },

});

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;
