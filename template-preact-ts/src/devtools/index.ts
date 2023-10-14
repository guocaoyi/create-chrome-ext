import { createElement, render } from 'preact'
import { DevTools } from './DevTools'
import './index.css'

render(createElement(DevTools, null), document.getElementById('app') as HTMLElement)

chrome.devtools.panels.create('PreactCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})
