import { component$, useStore, Host } from '@builder.io/qwik'
import './Popup.css'

interface Props {}

export const Popup = component$((props: Props) => {
  const crx = 'create-chrome-ext'

  return (
    <Host>
      <main>
        <h3>Popup Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {crx}
        </a>
      </main>
    </Host>
  )
})

export default Popup
