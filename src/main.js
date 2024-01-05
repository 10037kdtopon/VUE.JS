import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

$(document).ready(function() {
  $('body').addClass('bg-light');
});