// block-2-microtasks.js

// Практика 1
console.log("1")

Promise.resolve().then(() =>{
    console.log("2")
})

console.log("3")

// Практика 2
console.log("a")
setTimeout(() => {
    console.log("b")
}, 0);
Promise.resolve().then(()=>{
    console.log("c")
})
console.log("d")
// Практика 3
console.log("A")
Promise.resolve().then(()=>{
    console.log("B")
})
Promise.resolve().then(()=>{
    console.log("C")
})
console.log("D")
// Практика 4

Promise.resolve().then(()=>{
    console.log("X")

    Promise.resolve().then(()=>{
        console.log("Y")
})
})

// Практика 5
// предсказания
// стек: 1 3 a d A D, далее идут microtasks: 2 c B C X Y, и только потом macrotasks: b

// Практика 6
// что такое microtask - это задача(-и) с более высоким приоритетом после текущего кода, в их число входит .then, .catch, .finally
// почему .then(...) не выполняется сразу, так как .then это всё ещё не синхронный код, сначала передаётся колбэк в приоритетную очередь microtasks
// почему .then(...) раньше setTimeout(..., 0), так как .then относится к приоритеточной очереди, а setTimeout относится к обычным задачам, то есть в любом случае будет выполнять после .then
// чем microtasks отличаются от обычной очереди задач - приоритетностью, после того, как стек станет пустым, то начнёт брать задачи сначала из microtasks, только потом из macrotasks
// почему Promise не является синхронным просто потому, что уже зарезолвлен - ну так как из-за .then, .catch, в любом случае данная задача будет относиться к microtasks