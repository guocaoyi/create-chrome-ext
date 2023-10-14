import { createApp } from 'vue'
import App from './DevTools.vue'

chrome.devtools.panels.create('VueCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})

createApp(App).mount('#app')
