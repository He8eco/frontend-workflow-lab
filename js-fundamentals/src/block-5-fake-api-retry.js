// block-5-fake-api-retry.js

// Практика 1
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

async function main() {
    console.log("start")
    await sleep(1000)
    console.log("end")
}

main()

// Практика 2
function fakeApiSuccess1() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Данные получены")
        }, 1000)
    })
}

fakeApiSuccess1().then((result) => {
    console.log(result)
})
// Практика 3
function fakeApiError() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            reject(new Error("Ошибка запроса"))
        }, 1000)
    })
}

fakeApiError().catch((error) => {
    console.log(error.message)
})

// Практика 4
function getUser() {
    return new Promise((resolve) => {
        setTimeout(()=>{resolve("Данные пользователя получены")}, 1000)
    })
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {resolve("Данные постов получены")},1000)
    })
}

async function main2() {
    try {
    console.log(await getUser())
    console.log(await getPosts())
} catch (error) {
    console.log(error.message)
}
}

main2()
// Практика 5
async function main3() {
    try {
    console.log(await Promise.all([getUser(), getPosts()]))
} catch (error) {
    console.log(error.message)
}
}

main3()

// Практика 6
async function withRetry1(fn, retries) {
    let lastError
    
    for (let i = 1; i <= retries; i++) {
        try {
            return await fn()
        } catch (error) {
            lastError = error
        }
    }
    throw lastError
}
// Практика 7
let counter = 0

function unstableRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            counter++

            if (counter < 3) {
                reject(new Error("Данные не получены"))
            } else {
                resolve("Данные получены")
            }
        }, 500)
    })
}

async function withRetry2(fn, retries) {
    let lastError

    for (let i = 1; i <= retries; i++) {
        try {
            return await fn()
        } catch (error) {
            lastError = error
        }
    }
    
    throw lastError
}

async function main4() {
    try {
        const result = await withRetry2(unstableRequest, 3)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

main4()
// Практика 8
let counter2

function unstableRequest2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            counter2++

            if (counter < 8) {
                reject(new Error("Данные не получены"))
            } else {
                resolve("Данные получены")
            }
        }, 500)
    })
}

async function main5() {
    try {
        const result = await withRetry2(unstableRequest2, 3)
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

main5()

// Практика 9
// что такое фейковый API - это имитация асинхронного запроса, который может завершиться либо успешно, либо с ошибкой
// зачем нужен sleep(ms) - эта утилита нужна для паузы в асинхронном коде на заданное количество миллисекунд
// зачем нужен withRetry(fn, retries) - эта утилита нужна для повторного вызова асинхронной функции при ошибке, пока не закончатся попытки
// почему в withRetry надо передавать функцию, а не уже готовый Promise - потому что retry должен заново вызывать функцию и каждый раз создавать новый Promise
// чем последовательный сценарий отличается от параллельного - в последовательном сценарии одна операция ждёт завершения другой, а в параллельном несколько независимых операций запускаются одновременно