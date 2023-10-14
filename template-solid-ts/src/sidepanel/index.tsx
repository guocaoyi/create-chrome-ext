/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Sidepanel } from './Sidepanel'

render(() => <Sidepanel />, (document.getElementById('app') as HTMLElement) ?? document.body)
