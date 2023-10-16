import Alpine from 'alpinejs'

import type { Alpine as AlpineType } from 'alpinejs'

declare global {
  interface Window {
    Alpine: AlpineType
  }
}

window.Alpine = Alpine

const getTime = () => {
  const date = new Date()
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  return `${hour}:${minute}`
}

queueMicrotask(() => {
  Alpine?.data?.('newtab', () => ({
    time: getTime(),
    interval: null as NodeJS.Timeout | null,

    init() {
      this.interval = setInterval(() => {
        this.time = getTime()
      }, 1000)
    },
    destroy() {
      clearInterval(this.interval!)
    },
  }))

  Alpine.start()
})
