import { useState } from 'preact/hooks'
import './Sidepanel.css'

export const Sidepanel = () => {
  const [crx, setCrx] = useState('create-chrome-ext')

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

export default Sidepanel
