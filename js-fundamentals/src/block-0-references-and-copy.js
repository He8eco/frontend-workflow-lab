// Практика 1 
let a = 10
let b = a
b = 11
console.log("a:", a, "b:", b)
// Практика 2
const c = [1, 2]
const d = c
d.push(3)

console.log("c:", c, "d:", d)
// Практика 3 
const e = [1, 2]
const f = [...e]
f.pop()
console.log("e:", e, "f:", f)

// Практика 4 
const user1 = { name: "Ivan", age: 22 }
const user2 = user1

user2.age = 30
console.log("user1:", user1, "user2:", user2)
// Практика 5 
const user3 = { name: "Ivan", age: 22 }
const user4 = {...user3}

user4.age=35
console.log("user3:", user3, "user4:", user4)
// Практика 6 

const products = {apple: 3, banane: 5, milk: 1}
const filteredProducts = products
filteredProducts.apple = 2

//будет изменены изначальные данные, это крайне важно, так как обычно учитывается история данных в принципе, поэтому правильнее было бы так:

const trueFilteredProducts = {...products}
trueFilteredProducts.milk = 120

console.log("products: ",products, "trueFilteredProducts: ", trueFilteredProducts)

