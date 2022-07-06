import { Component } from 'inferno'
import './Options.css'

export class Options extends Component {
  render() {
    const crx = 'create-chrome-ext'

    return (
      <main>
        <h3>Options Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {crx}
        </a>
      </main>
    )
  }
}

export default Options
