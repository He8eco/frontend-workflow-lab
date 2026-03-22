// block-2-async-await.js

// Практика 1
async function getNumber() {
  return 42
}

console.log(getNumber())

// Практика 2
async function getString() {
  return "Привет"
}

async function logString() {
  const result = await getString()
  console.log(result)
}

logString()

// Практика 3
function getData() {
  return Promise.resolve("Данные")
}

async function logWithoutAwait() {
  const result = getData()
  console.log(result)
}

logWithoutAwait()

async function logWithAwait() {
  const result = await getData()
  console.log(result)
}

logWithAwait()

// Практика 4
function getStep1() {
  return Promise.resolve("Шаг 1")
}

function getStep2() {
  return Promise.resolve("Шаг 2")
}

async function steps() {
  const step1 = await getStep1()
  console.log(step1)

  const step2 = await getStep2()
  console.log(step2)
}

steps()

// Практика 5
async function getOk() {
  return "OK"
}

getOk().then((result) => {
  console.log(result)
})

// Практика 6
// что делает async - помечает функцию как асинхронную, и такая функция всегда возвращает Promise
// что делает await - дожидается завершения Promise и даёт его итоговое значение
// почему async-функция возвращает Promise - потому что async автоматически оборачивает возвращаемое значение в Promise
// что будет, если забыть await - вместо итогового значения часто получишь Promise
// можно ли использовать .then() у async-функции - можно, потому что async-функция возвращает Promise