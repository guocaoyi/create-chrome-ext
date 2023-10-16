function counter() {
  return {
    count: 0,
    init() {
      setInterval(() => {
        if (this.count > 0) {
          this.count--
        }
        console.log(this.count)
      }, 3000)
    },
    add() {
      this.count++
    },
  }
}
