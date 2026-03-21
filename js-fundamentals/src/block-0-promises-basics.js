// Практика 1
const promise = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Успех")
        console.log(promise)
    }, 1000)
})

console.log(promise)

// Практика 2
const promise2 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        reject("Ошибка")
        console.log(promise2)
    }, 1000)
})

console.log(promise2)
// Практика 3
console.log("start")

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("done")
    console.log("done")
  }, 1000)
})

console.log("end")

// Практика 4
const promise4 = new Promise((resolve, reject) => {
    const success = true
    if (success) {
        resolve("Данные получены")
    } else {
        reject("Ошибка загрузки")
    }
})

console.log(promise4)
// Практика 5

// Promise - это объект, который представляет будущий результат асинхронной операции
// pending - это что-то вроде периода ожидания, то есть нужно подождать результата
// fulfilled - это означает что всё прошло успешно, к примеру там данные загрузились или таймер прошёл
// rejected - означает что произошла ошибка
// Promise - это не готовое значение, потому что результат асинхронной операции появляется позже