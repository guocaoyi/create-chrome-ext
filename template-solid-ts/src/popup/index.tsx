/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Popup } from './Popup'

render(() => <Popup />, document.getElementById('app') ?? document.body)
