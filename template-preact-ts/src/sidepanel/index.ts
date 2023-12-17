import { createElement, render } from 'preact'
import { SidePanel } from './Sidepanel'
import './index.css'

render(createElement(SidePanel, null), document.getElementById('app') as HTMLElement)
