import Alpine from 'alpinejs'
import './main.css'

import type { Alpine as AlpineType } from 'alpinejs'

declare global {
  interface Window {
    Alpine: AlpineType
  }
}

window.Alpine = Alpine

Alpine.store('shop', {
  crx: 'create-chrome-ext',
})

Alpine.start()
