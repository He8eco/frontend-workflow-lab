// Практика 1
const settings1 = {
  theme: {
    color: "black",
    fontSize: 16
  }
}
const settingsError = {...settings1}
settingsError.theme.color = "red"
console.log(settings1, settingsError)

// Практика 2
const settings2 = {
  theme: {
    color: "black",
    fontSize: 16
  }
}

const settingsTrue = {
    ...settings2,
    theme: {
        ...settings2.theme,
        color: "blue"
    }
}

console.log(settings2, settingsTrue)
// Практика 3
const state1 = {
  user: {
    profile: {
      city: "Moscow",
      age: 22
    }
  }
}

const state2 = {
    ...state1,
    user: {
        ...state1.user,
        profile: {
            ...state1.user.profile,
            city: "Rostov"
        }
    }
}

console.log(state1, state2)
// Практика 4
const order1 = {
  id: 1,
  items: ["milk", "bread"]
}

const order2 = {
    ...order1,
    items: [...order1.items, "apple"]
}

console.log(order1, order2)
// Практика 5
const state3 = {
  products: [
    { id: 1, title: "Milk", count: 1 },
    { id: 2, title: "Bread", count: 2 }
  ]
}
const state4 = {
    ...state3,
    products: state3.products.map(product => {
        if (product.id === 1) {
            return {...product, count:5}
        } return product
    })
}

console.log(state3, state4)
// Практика 6
const appState1 = {
  users: [
    {
      id: 1,
      profile: {
        city: "Moscow",
        age: 22
      }
    },
    {
      id: 2,
      profile: {
        city: "Kazan",
        age: 25
      }
    }
  ]
}

const appState2 = {
    ...appState1, users: appState1.users.map(user => {
        if(user.id === 1) {
            return {...user, profile: {...user.profile, city: "Rostov"}}
        } return user
    })
}
console.log( appState1, appState2)
// Практика 7
const profile1 = {
    name: "Ivan",
    contacts: {
        phone: 939393,
        city: "Tula",
        address: {
            Home: 82
        }
    }
}

const profileError = {...profile1}
profileError.contacts.address=90
console.log("Плохой пример: ", profile1, profileError)


const profile2 = {
    name: "Ivan",
    contacts: {
        phone: 939393,
        city: "Tula",
        address: {
            Home: 82
        }
    }
}

const profileTrue = {
    ...profile2,
    contacts: {
        ...profile2.contacts,
        address: {
            ...profile2.contacts.address,
            Home: 93
        }
    }
}

console.log("Хороший пример: ", profile2, profileTrue)
