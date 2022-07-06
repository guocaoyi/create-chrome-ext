import { render, jsx } from '@builder.io/qwik'

import { Options } from './Options'
import './index.css'

render(document.getElementById('app') ?? document.body, jsx(Options, {}))
