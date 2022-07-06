import { component$, useStore } from '@builder.io/qwik'
import './Options.css'

export const Options = component$(
  (props) => {
    const crx = useStore('create-chrome-ext')

    return (
      <main>
        <h3>Options Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {crx}
        </a>
      </main>
    )
  },
  {
    name: 'Options',
  },
)

export default Options
