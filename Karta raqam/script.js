function numberFuc() {
    let number = prompt("Karta raqamini kiriting")
    let result = number.slice(-4).padStart(12, "*")
    alert(`Karta raqami: ${result}`)
}
numberFuc()