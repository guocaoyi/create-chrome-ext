import { component$, useStore } from '@builder.io/qwik'
import './Popup.css'

export const Popup = component$(
  (props) => {
    const crx = useStore('create-chrome-ext')

    return (
      <main>
        <h3>Popup Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {crx}
        </a>
      </main>
    )
  },
  {
    name: 'Popup',
  },
)

export default Popup
