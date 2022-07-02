/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Options } from './Options'

render(() => <Options />, document.getElementById('app') ?? document.body)
