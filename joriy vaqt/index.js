let result = document.getElementById("result")
let result2 = document.getElementById("result2")
let result3 = document.getElementById("result3")
let result4 = document.getElementById("result4")
function dateFunc() {
    const now = new Date()
    const today = now.getDate() < 10 ? `0` + now.getDate() : now.getDate()
    const month = now.getMonth() < 10 ? `0` + now.getMonth() : now.getMonth()
    const year = now.getFullYear()

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        `December`,
    ]

    result.innerHTML = `Today: ${today}`
    result2.innerHTML = `Month: ${months[month]}`
    result3.innerHTML = `Year: ${year}`

    const hour = now.getHours() < 10 ? `0` + now.getHours() : now.getHours()
    const minutes = now.getMinutes() < 10 ? `0` + now.getMinutes() : now.getMinutes()
    const second = now.getSeconds() < 10 ? `0` + now.getSeconds() : now.getSeconds()
    result4.innerHTML = `Vaqt:    ${hour}:${minutes}:${second}`
}