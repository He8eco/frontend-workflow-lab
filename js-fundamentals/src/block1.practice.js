const numbers = [1, 2, 3, 4, 5, 6]

const users = [
  { id: 1, name: 'Ivan', role: 'admin', age: 22 },
  { id: 2, name: 'Olga', role: 'user', age: 19 },
  { id: 3, name: 'Petr', role: 'user', age: 17 },
  { id: 4, name: 'Anna', role: 'moderator', age: 25 },
]

const doubled = numbers.map(n => n * 2)
console.log('numbers:', doubled)

const evens = numbers.filter(n => n % 2 === 0)
console.log('evens:', evens)

const findOver4 = numbers.find(n => n >4)
console.log('findOver4:', findOver4)

const hasAdmin = users.some(u => u.role === 'admin')
console.log('hasAdmin:', hasAdmin)

const allAdults = users.every(u => u.age >= 18)
console.log('allAdults:', allAdults)

const names = users.map(u => u.name)
console.log('names:', names)

const usersOnly = users.filter (u => u.role === 'user')
console.log('usersOnly:', usersOnly)

const numbers1 = [1, 2, 3]

const doubled1 = numbers1.reduce((acc, item) => {
  acc.push(item * 2)
  return acc
}, [])

console.log('doubled1:', doubled1)

const users1 = [
  { name: "Ivan", role: "admin" },
  { name: "Olga", role: "user" }
]

const grouped = users1.reduce((acc, item) => {
  acc[item.role] = item.name
  return acc
}, {})

console.log('grouped:', grouped)