// block-4-promise-combinators.js

// Практика 1
async function main1() {
    const result = await Promise.all([
        Promise.resolve("A"),
        Promise.resolve("B"),
        Promise.resolve("C")
    ])
    console.log(result)
}

main1()
// Практика 2
async function main2() {
    const result = await Promise.all([
        Promise.reject(new Error("Error")),
        Promise.resolve("B"),
        Promise.resolve("C")
    ]).catch((error) => {
        console.log(error.message)
    })
}

main2()
// Практика 3
async function main3() {
    const result = await Promise.allSettled([
        Promise.resolve("A"),
        Promise.reject(new Error("B")),
        Promise.resolve("C")
    ])
    console.log(result)
}

main3()

// Практика 4
async function main4() {
    const promise = await Promise.race([
        new Promise((resolve) => {setTimeout(() => {
            resolve("Быстрый")
        }, 100);}),
        new Promise((resolve) => {setTimeout(() => {
            resolve("Медленный")
        }, 1000);})
    ])
    console.log(promise)
}

main4()
// Практика 5
async function main5() {
    try {
        const promise = await Promise.race([
        new Promise((resolve, reject) => {setTimeout(() => {
            reject(new Error("Быстрый"))
        }, 100)}),
        new Promise((resolve) => {setTimeout(() => {
            resolve("Медленный")
        }, 1000)
    })
    ]) 
    console.log(promise) } catch (error) {
        console.log(error.message)
    }
}

main5()

// Практика 6

async function main6() {
    const promiseA = await new Promise((resolve)=> setTimeout(()=>{
        resolve("Первый")
    },1000))
    const promiseB = await new Promise((resolve)=> setTimeout(()=>{
        resolve("Второй")
    },1000))

    console.log(promiseA, promiseB)

    const result = await Promise.all([
        new Promise((resolve) => {setTimeout(() => {
            resolve("Быстрый")
        }, 1000);}),
        new Promise((resolve) => {setTimeout(() => {
            resolve("Медленный")
        }, 1000);})
    ])

    console.log(result)
}

main6()

// Практика 7
// что делает Promise.all() - принимает массив Promise, ждёт успешного завершения всех и возвращает массив результатов
// что делает Promise.allSettled() - принимает массив Promise, ждёт завершения всех и возвращает результат по каждому Promise со статусом fulfilled или rejected
// что делает Promise.race() - принимает массив Promise и возвращает результат первого завершившегося Promise, независимо от того, успех это или ошибка
// чем последовательное выполнение отличается от параллельного - при последовательном выполнении сначала завершается одна операция, потом запускается следующая, а при параллельном несколько операций запускаются сразу
// в каком случае Promise.all() неудобен - если достаточно одной ошибки, чтобы вся общая операция упала
// в каком случае Promise.allSettled() полезнее - когда нужно получить результат по каждому Promise отдельно и не уронить всю общую операцию из-за одной ошибки