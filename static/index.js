// Handler for translate form submit
document.getElementById('translate-btn').addEventListener('click', async function (e) {
  e.preventDefault()
  const text = document.getElementById('text').value
  const result = await translate(text)
  console.log('Result: ', result)
  if (!result) {
    alert('Error translating text')
    return
  }
  renderResult(result)
})

// Sends translate request to server and parses response
async function translate(text) {
  try {
    const body = JSON.stringify({ text })
    const result = await fetch('/api/translate', {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!result.ok) {
      return null
    }
    const json = await result.json()
    return json.result
  } catch (error) {
    console.error(error)
    return null
  }
}

// Renders the given result string to the page
function renderResult(result) {
  const elem = document.getElementById('result')
  elem.innerHTML = '<h2>Translation result</h2>'
  const resultElem = document.createElement('p')
  resultElem.innerText = result
  elem.appendChild(resultElem)
}
