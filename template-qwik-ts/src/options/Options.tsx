import { component$, Host } from '@builder.io/qwik'
import './Options.css'

interface Props {}

export const Options = component$((props: Props) => {
  const crx = 'create-chrome-ext'

  return (
    <Host>
      <main>
        <h3>Options Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {crx}
        </a>
      </main>
    </Host>
  )
})

export default Options
