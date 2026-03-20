// Практика 1
const arr1 = [1, 2]
const arr2 = [...arr1, 3]

console.log(arr1, arr2)

// Практика 2
const arr3 = [1, 2, 3, 4]
const arr4 = arr3.filter(item=> item !==3)

console.log(arr3, arr4)

// Практика 3
const arr5 = [10, 20, 30]
const arr6 = arr5.map(item => {
    if(item === 20) {
        return 200
    } return item
})
console.log(arr5, arr6)
// Практика 4
const user1 = { name: "Ivan" }
const user2 = {...user1, age: 22}

console.log(user1, user2)
// Практика 5
const user3 = { name: "Ivan", age: 22 }
const user4 = {...user3, age: 25}

console.log(user3, user4)
// Практика 6
const user5 = { name: "Ivan", age: 22, city: "Moscow" }
const {city, ...user6} = user5

console.log(user5, user6)
// Практика 7
const numbers = [3, 1, 2]
const numbers2 = [...numbers].sort((a,b) => a-b)

console.log(numbers, numbers2)
// Практика 8
const numbers3 = [1, 2, 3]
const numbers4 = [...numbers3].reverse()

console.log(numbers3, numbers4)
// Практика 9
const product1 = {name: "apple", size: 50, color: "green"}
const productUpdate1 = product1
productUpdate1.color = "red"

console.log("Плохой пример: ", product1, productUpdate1)

const product2 = {name: "apple", size: 50, color: "green"}
const productUpdate2 = {...product2,}
productUpdate2.color = "red"

console.log("Хороший пример: ", product2, productUpdate2)