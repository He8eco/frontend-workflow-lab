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
      <p>idle</p>
    </section>

    <section class="panel">
      <h2>Result</h2>
      <pre>No data yet</pre>
    </section>

    <section class="panel">
      <h2>Error</h2>
      <p>No errors</p>
    </section>

    <section class="panel">
      <h2>Log</h2>
      <ul>
        <li>UI stand initialized</li>
      </ul>
    </section>
  </main>
`

const loadButton = document.querySelector('.load-btn')

loadButton.addEventListener('click', async ()=>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456')
    const text = await response.text()
    console.log(response.ok)
    console.log(response.status)
  } catch (error) {
    console.log('error')
  }
})