// Практика 1
const numbers = [7, 2, 9, 1, 5]

const sortedAsc = [...numbers].sort((a, b) => a - b)

console.log('numbers:', numbers)
console.log('sortedAsc:', sortedAsc)


// Практика 2
const users = [
  { id: 1, name: "Ivan", age: 30 },
  { id: 2, name: "Olga", age: 25 },
  { id: 3, name: "Anna", age: 35 }
]

const sortedUsers = [...users].sort((a, b) => {
  return a.name.localeCompare(b.name)
})

console.log('users:', users)
console.log('sortedUsers:', sortedUsers)


// Практика 3
// sort мутирует исходный массив, поэтому массив a изменится после вызова sort
const a = [3, 1, 2]

console.log('before sorting a:', a)

a.sort((x, y) => x - y)

console.log('after sorting a:', a)