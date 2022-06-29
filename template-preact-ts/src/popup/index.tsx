import { render } from 'preact'
import { Popup } from './Popup'
import './index.css'

render(<Popup />, document.getElementById('app') as HTMLElement)
