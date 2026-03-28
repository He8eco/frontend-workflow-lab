// block-4-predict-logs.js

// Snippet 1
// console.log("1")

// setTimeout(() => {
//   console.log("2")
// }, 0)

// console.log("3")

// Snippet 2
// console.log("A")

// Promise.resolve().then(() => {
//   console.log("B")
// })

// console.log("C")

// Snippet 3
// console.log("start")

// setTimeout(() => {
//   console.log("timeout")
// }, 0)

// Promise.resolve().then(() => {
//   console.log("then")
// })

// console.log("end")

// Snippet 4
// console.log("1")

// Promise.resolve().then(() => {
//   console.log("2")
// })

// Promise.resolve().then(() => {
//   console.log("3")
// })

// console.log("4")

// Snippet 5
// async function run() {
//   console.log("A")
//   await Promise.resolve()
//   console.log("B")
// }

// console.log("1")
// run()
// console.log("2")

// Snippet 6
// async function test() {
//   console.log("X")
//   await Promise.resolve()
//   console.log("Y")
// }

// console.log("start")

// setTimeout(() => {
//   console.log("timer")
// }, 0)

// test()

// console.log("end")

// Snippet 7
// async function run() {
//   await Promise.resolve()
//   console.log("await done")
// }

// Promise.resolve().then(() => {
//   console.log("then done")
// })

// run()

// console.log("end")

// Snippet 8
// Promise.resolve().then(() => {
//   console.log("A")

//   Promise.resolve().then(() => {
//     console.log("B")
//   })
// })

// setTimeout(() => {
//   console.log("C")
// }, 0)

// console.log("D")

// Snippet 9
// async function demo() {
//   console.log("1")
//   await Promise.resolve()
//   console.log("2")
//   await Promise.resolve()
//   console.log("3")
// }

// console.log("start")
// demo()
// console.log("end")

// Snippet 10
async function run() {
  console.log("A")
  await Promise.resolve()
  console.log("B")
}

console.log("1")

setTimeout(() => {
  console.log("2")
}, 0)

Promise.resolve().then(() => {
  console.log("3")
})

run()

console.log("4")