import { render, jsx } from '@builder.io/qwik'

import { Popup } from './Popup'
import './index.css'

render(document.getElementById('#app') ?? document.body, jsx(Popup, {}))
