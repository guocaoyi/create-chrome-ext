/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { NewTab } from './NewTab'

render(() => <NewTab />, document.getElementById('app') ?? document.body)
