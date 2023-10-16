import Alpine from 'alpinejs'

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
    interval: null,

    init() {
      this.interval = setInterval(() => {
        this.time = getTime()
      }, 1000)
    },
    destroy() {
      clearInterval(this.interval)
    },
  }))

  Alpine.start()
})
