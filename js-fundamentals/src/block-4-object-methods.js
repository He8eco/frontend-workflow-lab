// Практика 1
const user = {
  id: 1,
  name: "Ivan",
  age: 22,
  role: "admin"
}

const entries = Object.entries(user)

console.log('entries:', entries)

const filteredEntries = entries.filter(([key]) => {
  return key === "name" || key === "role";
});

const filteredUser = Object.fromEntries(filteredEntries)

console.log('filteredUser:', filteredUser)

// Практика 2

const ommited = Object.fromEntries(
  Object.entries(user).filter(([key]) => key !=="age" && key !== "role")
)
console.log(ommited)
// Практика 3
const roles = {
  ivan: "admin",
  olga: "user"
}

const entriesRoles = Object.entries(roles)

const invertedEntries = entriesRoles.map(([key, value]) => {
  return [value, key]
})

const rolesInverted = Object.fromEntries(invertedEntries)

console.log(rolesInverted)

// Практика 4

const product = {
  title: "Phone",
  price: 500,
  brand: "Xiaomi"
}

Object.entries(product).forEach(([key, value]) => {
  console.log( `${key}: ${value}`)
})

// Практика 5

const entriesMassive = [
  ["id", 1],
  ["name", "Ivan"],
  ["role", "admin"]
]

console.log(Object.fromEntries(entriesMassive))

// Практика 6

const userIvan = { name: "Ivan" }

console.log("name" in userIvan)
console.log("toString" in userIvan)

console.log(Object.hasOwn(userIvan, "name"))
console.log(Object.hasOwn(userIvan, "toString"))

//hasOwn ведёт себя по-другому, потому что in смотрит не только на наличие ключей, но и на прототипы, в то время как hasOwn в данном плане более строг и поэтому его рекомендуется использовать в проектах, нежели in

