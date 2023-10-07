import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

Alpine.data('dropdown', () => ({
  open: false,

  toggle() {
    this.open = !this.open
  },
}))

console.info('popup index.js loaded')
