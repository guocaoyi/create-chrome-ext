import { useState } from 'react'
import './Popup.css'

function App() {
  const [crx, setCrx] = useState('chrome-extension-boilerplate-vite-svelte')

  return (
    <main>
      <h3>Popup Page!</h3>

      <h6>v 0.0.1</h6>

      <a
        href="https://github.com/guocaoyi/chrome-extension-boilerplate-vite-svelte"
        target="_blank"
      >
        Power by {crx}
      </a>
    </main>
  )
}

export default App
