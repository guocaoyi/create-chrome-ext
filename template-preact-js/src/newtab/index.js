import { Options, render } from 'preact'
import { NewTab } from './NewTab'
import './index.css'

render(Options(NewTab, null), document.getElementById('app'))
