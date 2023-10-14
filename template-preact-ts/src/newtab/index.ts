import { createElement, render } from 'preact'
import { NewTab } from './NewTab'
import './index.css'

render(createElement(NewTab, null), document.getElementById('app') as HTMLElement)
