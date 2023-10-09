import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'app-options',
  styleUrl: 'app-options.css',
})
export class AppOptions {
  @Prop() crx = ''

  render() {
    return (
      <main>
        <h3>Options Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {this.crx}
        </a>
      </main>
    )
  }
}

export default AppOptions
