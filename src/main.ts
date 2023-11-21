import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import MegaMenu from 'primevue/megamenu';
import Ripple from 'primevue/ripple';

import router from './router';
import App from './App.vue';

import 'primevue/resources/themes/lara-light-teal/theme.css'
import './style.css'


const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component('MegaMenu', MegaMenu);

app.directive('ripple', Ripple);

app.mount('#app')
