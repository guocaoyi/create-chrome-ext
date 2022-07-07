import Alpine from 'alpinejs'

const dropdown = () => {
  return {
    show: false,
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
    isOpen() {
      return this.show === true
    },
  }
}

Reflect.set(window, 'dropdown', dropdown)

Alpine.start()
window.Alpine = Alpine
