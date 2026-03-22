// block-3-error-handling.js

// Практика 1
function getData1() {
    return Promise.resolve("Успешные данные")
}

async function main1() {
    try {
        const result = await getData1()
        console.log(result)
    } catch (error){
        console.log(error.message)
    }
}

main1()
// Практика 2
function getData2() {
    return Promise.reject(new Error("Ошибка сервера"))
}

async function main2() {
    try {
        const result = await getData2()
        console.log(result)
    } catch (error){
        console.log(error.message)
    }
}

main2()

// Практика 3
function ageValidate(age) {
    if(age < 18) {
        throw new Error("Несовершеннолетний")
    } return "Совершеннолетний"
}
try {
    const result = ageValidate(16)
    console.log(result)
} catch (error) {
    console.log(error.message)
}

// Практика 4
async function getData3() {
  throw new Error("Ошибка в данных")
}

getData3().catch((error) => {
  console.log(error.message)
})

// Практика 5
async function getData5() {
    throw new Error("Возникла ошибка в getData5")
}

async function main5() {
    try {
        await getData5()
    } catch (error){
        console.log("Поймана ошибка:", error.message)
    } 
}

main5()

// Практика 6
function getData4() {
    return Promise.resolve("Данные успешно загрузились")
}

async function main4() {
    try {
        const result = await getData4()
        console.log(result)
    } catch (error){
        console.log(error.message)
    } finally {
        console.log("Загрузка остановлена")
    }
}

main4()

// Практика 7


function getData6() {
    try {
        throw new Error("Возникла ошибка в getData6")
    } catch (error) {
        console.log("Что-то пошло не так:", error.message)
        throw error
    }
}

async function main6() {
    try {
        await getData6()
    } catch (error){
        console.log("Поймана ошибка:", error.message)
    } 
}

main6()

// Практика 8
// что делает try/catch - позволяет перехватить и обработать ошибку, если она произошла в try
// что делает throw - выбрасывает ошибку и прерывает обычное выполнение кода в этом месте
// что такое rejection - это когда Promise завершился с ошибкой
// что значит “пробросить ошибку выше” - это значит не обработать ошибку окончательно в текущей функции, а дать ей уйти в вызывающий код, где её поймают выше
// почему нельзя просто молча глотать ошибку - потому что тогда теряется причина проблемы, и код снаружи может продолжить работу так, будто всё нормально