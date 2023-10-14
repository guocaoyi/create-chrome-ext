import { render } from 'preact'
import { DevTools } from './DevTools'
import './index.css'

render(<DevTools />, document.getElementById('app') as HTMLElement)

chrome.devtools.panels.create('PreactCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})
