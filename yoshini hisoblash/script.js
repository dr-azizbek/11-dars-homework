// function ageFunc() {
//     let yil = +prompt("Tugilgan yilinggizni kiriting")
//     let now = new Date()
//     let year = now.getFullYear()
//     let day = now.getDay()
//     let result = year - yil
//     console.log(result + ` yosh`)
// }
// ageFunc()


alert("Tug'ulgan kuninggizni kiriting:")
let a1 = prompt('Oyinggizni') - 1
let b1 = prompt("Kuninggizni")
let c1 = prompt("Yilinggizni")
let oneDay = new Date();
oneDay.setFullYear(c1, a1, b1);

let secondDay = new Date();
let a2 = secondDay.getMonth()
let b2 = secondDay.getDate()
let c2 = secondDay.getFullYear()

let secondDays = new Date(c2, a2, b2);

d3 = (secondDays - oneDay)
let kun = Math.abs(Math.round(d3 / (1000 * 60 * 60 * 24 * 30 * 12)))
alert(`Yishungiz ${kun}da ekan.`)