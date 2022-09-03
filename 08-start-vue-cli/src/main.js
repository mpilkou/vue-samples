import { createApp } from 'vue';

import App from './App.vue'
import FrendContact from './components/FrendContact.vue'
import NewFrend from './components/NewFrend.vue'

const app = createApp(App);

app.component('frend-contact', FrendContact);
app.component('frend-new', NewFrend);

app.mount('#app');