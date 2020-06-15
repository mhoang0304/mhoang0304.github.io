//template string
// let tex = `Hôm nay trời đẹp quá
//             Hà nội
//             Hà Phương
// `

// let tem = 36
// let string = `Hôm nay trời nóng ${tem + 1} độ`

// console.log(string)

// function sum(a, b) {
//     return a + b
// }

// let result = `Tổng của 2 số là: ${sum(3,4)}`
// console.log(result);

// let name = [`an`, `hoa`, `hang`, `huy`]
// let data = ``
// for (let i = 0; i < name.length; i++) {
//     data += `
//     người thứ ${i + 1} là : ${name[i]}`
// }
// console.log(data);
// data = "hello"
// console.log(data);

//Default parameter
// function sum(a = 3, b = 4) {
//     return a + b
// }

// let result = sum(5)
// console.log(result);

//Arrow function
// let sum = (a, b) => a + b

// let mutil = a => a * 2

// let result = sum(3, 4)
// console.log(result);

// let result1 = mutil(3)
// console.log(result1);

//Destructing
person = {
    name: "Duy",
    email: "Duy@blabla"
}

// let name = person.name
// let email = person.email

let { name: name1, email: email1 } = person

console.log(name1);
console.log(email1);

let arr = [1, 2]
let [a, b] = arr
console.log('a :' + a);
console.log('b :' + b);