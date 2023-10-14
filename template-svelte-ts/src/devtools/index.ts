import App from './DevTools.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

chrome.devtools.panels.create('SvelteCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})

export default app
