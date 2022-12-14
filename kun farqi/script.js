alert("Ikkita vaqtni orasida qancha kun borligini bilish:")
let a1 = prompt('1-vaqtni\n oyni raqamlarda kiriting') - 1
let b1 = prompt("1-vaqtni\nsanani kiriting")
let c1 = prompt("1-vaqtni\nyilni kiriting")
let oneDay = new Date();
oneDay.setFullYear(c1, a1, b1);

let a2 = prompt("2-vaqtni\noyni raqamlarda kiriting") - 1
let b2 = prompt("2-vaqtni\nsanani kiriting")
let c2 = prompt("2-vaqtni\nyilni kiriting")
let secondDay = new Date();
secondDay.setFullYear(c2, a2, b2);

d3 = (secondDay - oneDay)
let kun = Math.abs(Math.round(d3 / (1000 * 60 * 60 * 24)))
alert(kun)