class Component {
  async render() {
    try {
      await this.work()
    } catch (_error) {
      return false
    }

    return true
  }

  async work() {
    return new Promise(resolve => {
      setTimeout(resolve, 500)
    })
  }
}

export default Component
