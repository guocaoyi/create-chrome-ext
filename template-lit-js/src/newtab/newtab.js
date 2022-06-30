import { html, css, LitElement } from 'lit'

/**
 * newtab
 */
export class Newtab extends LitElement {
  static get properties() {
    return {
      crx: { type: String },
    }
  }

  constructor() {
    super()
    this.crx = 'create-chrome-ext'
  }

  render() {
    return html`
      <main>
        <h3>Newtab Page!</h3>

        <h6>v 0.0.1</h6>

        <a href="https://github.com/guocaoyi/create-chrome-ext" target="_blank"
          >Generator by ${this.crx}</a
        >
      </main>
    `
  }

  static get styles() {
    return css`
      :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
          Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      :global(body) {
        min-width: 20rem;
      }

      main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
      }

      h3 {
        color: #3355ff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 200;
        line-height: 1.2rem;
        margin: 2rem auto;
      }

      h6 {
        font-size: 0.5rem;
        color: #333333;
        margin: 0.5rem;
      }

      a {
        font-size: 0.5rem;
        margin: 0.5rem;
        color: #cccccc;
        text-decoration: none;
      }

      @media (min-width: 480px) {
        h3 {
          max-width: none;
        }
      }
    `
  }
}

window.customElements.define('newtab', Newtab)
