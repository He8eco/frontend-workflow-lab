// Example 1 (mutates): ...
const arr1 = [3, 1, 2]
console.log('before:', arr1)
arr1.sort((a, b)=> a-b)
console.log('after:', arr1)

// Example 2 (mutates): ...
const arr2 = [3, 1, 2]
console.log('before:', arr2)
arr2.splice(1, 0, 2)
console.log('after:', arr2)

// Example 3 (mutates): ...
const arr3 = [3, 1, 2]
console.log('before:', arr3)
arr3.splice(2, 1)
console.log('after:', arr3)

// Example 4 (mutates): ...
const arr4 = [3, 1, 2]
console.log('before:', arr4)
arr4.pop()
console.log('after:', arr4)

// Example 5 (mutates): ...
const obj1 = { a: 1, b: 2 }
obj1.a = 3
console.log(obj1)

// Example 6 (mutates): ...
const obj2 = { a: 1, b: 2 }
delete obj2.a
console.log(obj2)

// Example 7 (no mutates): ...
const arr5 = [3, 1, 2]
const arr6 = arr5.map(n => n *3)
console.log('before:', arr5)
console.log('after:', arr6)

// Example 8 (no mutates): ...
const arr7 = [3, 1, 2]
const arr8 = arr7.filter(n => n > 1)
console.log('before:', arr7)
console.log('after:', arr8)

// Example 9 (no mutates): ...
const arr9 = [3, 1, 2]
const arr10 = arr9.slice(0, 1)
console.log('before:', arr9)
console.log('after:', arr10)

// Example 10 (no mutates): ...
const obj3 = { a: 1, b: 2 }
const obj4 = {...obj3, c: 3}
console.log('before:', obj3)
console.log('after:', obj4)

// Example 11 (no mutates): ...
const obj5 = { a: 1, b: 2 }
const { a, ...obj6} = obj5
console.log('before:', obj5)
console.log('after:', obj6)

const e = [1,2]
const f = e
f.push(3)
console.log(e)
console.log(f)
const g = [...e]
g.push(999)

console.log('e === f ?', e === f)
console.log('e === g ?', e === g)