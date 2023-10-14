import { createElement, render } from 'preact'
import { SidePanel } from './SidePanel'
import './index.css'

render(createElement(SidePanel, null), document.getElementById('app'))
