// Практика 1
const user1 = { name: "Ivan", age: 22 }
const user2 = { ...user1 }
user2.name = "Inga"
user2.age = 21

console.log("user1: ", user1, "user2: ", user2)
// Практика 2
const user3 = {
  name: "Ivan",
  address: {
    city: "Moscow"
  }
}

const user4 = {...user3}
user4.address.city = "Kazan"

console.log("user3: ", user3, "user4: ", user4)
// Практика 3
const user5 = {
  name: "Ivan",
  address: {
    city: "Moscow"
  }
}

const user6 = {
    ...user5, 
    address: {
        ...user5.address
    }
}
user6.address.city = "Kazan"

console.log("user5: ", user5, "user6: ", user6)
// Практика 4
const products1 = [
  { title: "Milk", count: 1 },
  { title: "Bread", count: 2 }
]
const products2 = [...products1]
products2[0].count = 99

console.log("products1: ", products1, "products2: ", products2)
// Практика 5
const products3 = [
  { title: "Milk", count: 1 },
  { title: "Bread", count: 2 }
]
const products4 = products3.map(item => ({...item}))
products4[0].count=121
console.log("products3: ", products3, "products4: ", products4)

// Практика 6
const profile1 = {
    name: "Ivan",
    age: 22,
    address: {
        city: "Tazynskaya",
        home: 82
    }
}

// Плохая практика использовать поверхностную копию, если нужно чтоб в изначальном варианте вложенный объект остался неизменным:
const profile2 = {...profile1}

profile2.address.home = 94

console.log("profile1: ", profile1, "profile2: ", profile2)

const profile3 = {
    name: "Ivan",
    age: 22,
    address: {
        city: "Tazynskaya",
        home: 82
    }
}

//Если нужно оставить в изначальном варианте вложенный объект таким, каким он есть, то нужно использовать глубокую копию

const profile4 = {
    ...profile3,
    address: {
        ...profile3.address
    }
}

profile4.address.city = "Rostov"
console.log("profile3: ", profile3, "profile4: ", profile4)