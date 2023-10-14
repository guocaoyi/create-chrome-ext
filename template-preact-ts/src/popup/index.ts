import { createElement, render } from 'preact'
import { Popup } from './Popup'
import './index.css'

render(createElement(Popup, null), document.getElementById('app') as HTMLElement)
