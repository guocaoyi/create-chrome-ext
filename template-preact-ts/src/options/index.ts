import { createElement, render } from 'preact'
import { Options } from './Options'
import './index.css'

render(createElement(Options, null), document.getElementById('app') as HTMLElement)
