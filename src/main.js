import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

/* eslint-disable no-console */
axios.get('/api/get')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('err');
    console.log(err);
  });
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
