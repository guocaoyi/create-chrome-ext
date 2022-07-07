import Alpine from 'alpinejs'

import './index.css'

window.Alpine = Alpine

Alpine.start()

Alpine.data('dropdown', () => ({
  open: false,

  toggle() {
    this.open = !this.open
  },
}))

console.info('option index.ts loaded')
