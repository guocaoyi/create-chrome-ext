import Alpine from 'alpinejs'

window.Alpine = Alpine

queueMicrotask(() => {
  Alpine?.data?.('popup', () => ({
    count: 0,

    triggerSync(count) {
      chrome?.storage?.sync?.set?.({ count })
      chrome?.runtime?.sendMessage?.({ type: 'COUNT', count })
    },

    toggleMinus() {
      this.triggerSync(--this.count)
    },

    toggleAdd() {
      this.triggerSync(++this.count)
    },

    init() {
      chrome?.storage?.sync?.get?.(['count'], (result) => {
        this.count = result.count || 0
      })
    },
  }))

  Alpine.start()
})
