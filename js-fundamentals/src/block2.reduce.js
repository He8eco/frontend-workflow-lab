const numbers = [5, 10, 15, 20]

const sum = numbers.reduce((acc, item) => {
    return acc + item
}, 0)
console.log('sum:', sum)

const nums = [10, -5, 7, -2, 8]

const summplus = nums.reduce((acc, item) => {
    if (item > 0) {
        return acc + item
    }
        return acc
    
}, 0)

console.log('summplus:', summplus)

const words = ["Frontend", "is", "fun"]

const sentence = words.reduce((acc, item) => {
    if (acc === "") {
        return item
    } 
        return acc + " " + item

}, "")

console.log('sentence:', sentence)


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

const sumFruits = fruits.reduce((acc, item) => {
    if (acc[item]) {
        acc[item] = acc[item] + 1
    } else {
        acc[item] = 1
    }
    return acc
}, {})

console.log('sumFruits:', sumFruits)

const users = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Olga" },
  { id: 3, name: "Anna" }
]

const grouped = users.reduce((acc, item) => {
    acc[item.id] = item.name
    return acc
}, {})

console.log('grouped:', grouped)