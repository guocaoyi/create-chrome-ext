import Alpine from 'alpinejs'

window.Alpine = Alpine

queueMicrotask(() => {
  Alpine?.data?.('options', () => ({
    countSync: 0,

    init() {
      chrome.storage.sync.get(['count'], (result) => {
        this.countSync = result.count || 0
      })

      chrome.runtime.onMessage.addListener((request) => {
        if (request.type === 'COUNT') {
          this.countSync = request.count || 0
        }
      })
    },
  }))

  Alpine.start()
})
