// block-1-then-catch-finally.js

// Практика 1
const promise1 = new Promise((resolve) => {
    resolve("Данные загружены")
})
promise1.then((result)=>{
    console.log(result)
})
// Практика 2
const promise2 = new Promise((resolve, reject) => {
    reject("Ошибка сервера")
})

promise2.catch((error) => {
    console.log(error)
})

// Практика 3
Promise.resolve(10)
    .then((number) =>{
        return number*2
    })
    .then((number)=>{
        return number+5
    })
    .then((number)=> {
        console.log(number)
    })

// Практика 4
Promise.resolve(15)
    .then((number)=>{
        number*2
    })
    .then((number)=>{
        console.log(number)
    })

// Практика 5
Promise.resolve("Good")
    .then((message)=>{
        console.log(message)
        throw new Error("Ошибка в then")
    })
    .catch((error) => {
        console.log(error.message)
    })

// Практика 6
Promise.resolve(15)
    .then((number)=>{
        return number*2
    })
    .then((number)=>{
        console.log(number)
    })
    .finally(()=>{
        console.log("Конец")
    })

// Практика 7
// что делает .then() - принимает успешный результат в Promise и делает необходимые действия с резульататом
// что делает .catch() - принимает результат с ошибкой и обрабатывает этот результат
// что делает .finally() - выполняет завершающие действия, не зависимо от результата, к примеру прекратить загрузку, выведет сообщение на экран
// почему в цепочке важен return - важен чтобы передать значение в следующую функцию, к примеру в then, иначе будет undefined
// что ловит .catch() - ловит ошибки, как из rejected, так и из .then, если в нём возникла ошибка