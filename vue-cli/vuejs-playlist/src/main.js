import Vue from 'vue';
import App from './App.vue';
import Ninjas from "./components/Ninjas";

Vue.config.productionTip = false;

// Globalne uzycie komponentu. Musimy go globalnie zarejestrować, wtedy możemy go używać w całej aplikacji (chyba)
Vue.component("ninjas", Ninjas);

new Vue({
  render: h => h(App),
}).$mount('#app');
