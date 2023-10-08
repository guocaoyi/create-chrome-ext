import Alpine from 'alpinejs'
import './main.css'

window.Alpine = Alpine

Alpine.store('shop', {
  crx: 'create-chrome-ext',
})

Alpine.start()
