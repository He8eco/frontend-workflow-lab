// block-3-async-await.js

// Практика 1
async function run() {
    console.log("1")
    await Promise.resolve()
    console.log("2")
}

run()
console.log("3")

// Практика 2

async function run2() {
    console.log("A")
    await Promise.resolve()
    console.log("B")
}

setTimeout(() => {
    console.log("C")
}, 0);

run2()
console.log("D")

// Практика 3
async function run3() {
    console.log("log_1")
    await Promise.resolve()
    console.log("log_2")
    await Promise.resolve()
    console.log("log_3")
}

run3()
// Практика 4
async function run4() {
    console.log("log_4")
    await Promise.resolve()
    console.log("log_5")
}

run4()

Promise.resolve().then(()=> {
    console.log("X")
})

console.log("Y")

// Практика 5
// предсказания
// стек: 1 3 A D log_1 log_4 Y, после этого идёт microtasks: 2 B log_2 log_5 X log_3, только в конце macrotasks: C
// Пока не забыл, вот тут я был удивлён, что сначала идёт log_5, X и только потом log_3, я думал log_3 будет первее идти, а там оказывается тоже что-то вроде дополнительной очереди... тип если в функции 2 await, то сначала выполняется действие после 1 await, потом переходит к другим micro которые вне функции, находятся как бы на верху, и только потом возвращается к тому, что после второго await

// Практика 6
// ответы словами
// что делает async - позволяет использовать await внутри функции и при этом при возврате (return) возвращает Promise. Вопрос чисто от меня, если внутри return "123", то этот код выполнится сразу или нет? ибо return "123" по сути тоже самое как Promise.resolve("123")
// что делает await - это значит что нужно дождаться выполнение функции и продолжить выполнять код функции после await позже, продолжение функции передать в microtasks
// почему await не блокирует весь JS - после await ждёт только продолжение конкретной функции, но остальной код продолжит выполняться
// почему код после await не идёт сразу - так как код который находится после await становится в очередь microtasks
// почему await Promise.resolve(...) всё равно не становится синхронным - потому что код после await в любом случае становится асинхронным, передаёт код в очередь microtasks
// как await связан с Promise и microtasks - код после await ведёт себя как microtasks