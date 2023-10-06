import { createApp } from 'vue'
import App from './NewTab.vue'

chrome.devtools.panels.create('Devtools Panel', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})

createApp(App).mount('#app')
