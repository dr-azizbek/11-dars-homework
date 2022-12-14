function numberFuc() {
    let number = prompt("Telefon raqaminggiz (+99891xxxxxxx)")
    let result = number.slice(0).padEnd(18, "phone")
    alert(`Telefon raqami: ${result}`)
}
numberFuc()