import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'app-popup',
  styleUrl: 'app-popup.css',
})
export class AppPopup {
  @Prop() crx: string = ''

  render() {
    return (
      <main>
        <h3>Popup Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {this.crx}
        </a>
      </main>
    )
  }
}

export default AppPopup
