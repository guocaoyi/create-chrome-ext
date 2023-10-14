/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { DevTools } from './DevTools'

render(() => <DevTools />, document.getElementById('app') ?? document.body)

chrome.devtools.panels.create('SolidCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})
