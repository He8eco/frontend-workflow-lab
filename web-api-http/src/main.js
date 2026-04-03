import './style.css'


document.querySelector('#app').innerHTML = `
  <main class="page">
    <header class="page-header">
      <h1>Web API + HTTP training stand</h1>
      <p>
        Base UI stand for requests, abort, retry, storage and error handling.
      </p>
    </header>

    <section class="controls">
      <button class="load-btn" type="button">Load</button>
      <button class="abort-btn"type="button">Abort</button>
      <button type="button">Retry</button>
      <button type="button">Clear storage</button>
    </section>

    <section class="panel">
      <h2>Status</h2>
      <p class="status-text">idle</p>
    </section>

    <section class="panel">
      <h2>Result</h2>
      <pre class="result-text">No data yet</pre>
    </section>

    <section class="panel">
      <h2>Error</h2>
      <p class="error-text">No errors</p>
    </section>

    <section class="panel">
      <h2>Log</h2>
      <ul class="log-list">
        <li>UI stand initialized</li>
      </ul>
    </section>
  </main>
`
const loadButton = document.querySelector('.load-btn')
const abortButton = document.querySelector('.abort-btn')
const statusText = document.querySelector('.status-text')
const resultText = document.querySelector('.result-text')
const errorText = document.querySelector('.error-text')
const logList = document.querySelector('.log-list')

function setStatus(value) {
  statusText.textContent = value
}
function setResult(value) {
  resultText.textContent = value
}
function setError(value) {
  errorText.textContent = value
}
function addLog(message) {
  const item = document.createElement('li')
  item.textContent = message
  logList.prepend(item)
}

let controller = null

async function request(url) {
  const response = await fetch(url, {signal: controller.signal})
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
  } else {
  return response.json()
}
  
}

loadButton.addEventListener('click', async ()=>{
  controller = new AbortController()
  setStatus('loading')
  setResult('No data yet')
  setError('No errors')
  addLog('Load button clicked')
  addLog('Request started via request()')

  try {
    const data = await request('https://jsonplaceholder.typicode.com/posts/78')
    setStatus('success')
    setResult(JSON.stringify(data, null, 2))
    addLog('Result rendered')
    controller = null
  } catch (error) {
    if (error.name === 'AbortError') {
      setStatus('Aborted')
      addLog('Request was aborted')
      controller = null
      return
    }
    setStatus('error')
    setError(`Network error: ${error.message}`)
    addLog('Network error caught')
    controller = null
  }
})

abortButton.addEventListener('click', ()=>{
  if (!controller) {
    addLog('Abort clicked, but there is no active controller')
    return
  }

  controller.abort()
  addLog('AbortController.abort() called')
})
