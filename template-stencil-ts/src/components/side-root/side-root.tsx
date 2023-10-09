import { Component, h } from '@stencil/core'

@Component({
  tag: 'side-root',
  styleUrl: 'side-root.css',
  shadow: true,
})
export class SideRoot {
  render() {
    let crx = 'create-chrome-ext'
    return (
      <main>
        <h3>Side Panel Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {crx}
        </a>
      </main>
    )
  }
}
