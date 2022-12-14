alert('Tugulgan kuninggizni kiriting')
let month = prompt("Oyni raqamlarda kiriting") - 1
let date = prompt("Sanani kiriting")
let year = prompt("Yilni kiriting")
let now = new Date();
now.setFullYear(year, month, date);

let day = now.getDay()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(days[day] + ` hafta kunida tugulgan ekansiz`)



