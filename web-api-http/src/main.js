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
      <button type="button">Abort</button>
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

loadButton.addEventListener('click', async ()=>{
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456')
  // Для теста 404 можно временно поставить:
  // const url = 'https://jsonplaceholder.typicode.com/posts/123456'
    addLog(`Response received: ${response.status}`)
    if (!response.ok) {
      setStatus('Error')
      setError(`HTTP Error: ${response.status}`)
      addLog('Обнаружена ошибка')
    } else {
    const data = await response.json()

    setStatus('success')
    setResult(JSON.stringify(data, null, 2))
    addLog('Result rendered')}
  } catch (error) {
    setStatus('error')
    setError(`Network error: ${error.message}`)
    addLog('Network error caught')
  }
})