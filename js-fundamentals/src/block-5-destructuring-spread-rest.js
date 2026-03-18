const users = [
  { id: 1, name: "Ivan", role: "admin" },
  { id: 2, name: "Olga", role: "user" },
  { id: 3, name: "Anna", role: "user" }
]
const usersById= users.reduce((acc, item) =>{
    acc[item.id] = item
    return acc
}, {})

console.log(usersById)

const products = [
  { id: 101, title: "Phone" },
  { id: 102, title: "Laptop" }
]

const productsById= products.reduce((acc, item) =>{
    acc[item.id] = item
    return acc
}, {})

const productsValues = Object.values(productsById)

console.log(productsValues)

const user = {
  id: 1,
  name: "Ivan",
  age: 22
}

const userAddRole = {...user, role: "admin"}

console.log(userAddRole)

const {age, ...userNoneAge} = userAddRole

console.log(userNoneAge)

console.log(userAddRole)