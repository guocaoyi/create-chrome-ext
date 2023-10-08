import { Component } from 'inferno'
import './Sidepanel.css'

export class Sidepanel extends Component {
  render() {
    const crx = 'create-chrome-ext'

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

export default Sidepanel
