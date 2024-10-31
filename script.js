function showAlert() {
    let div = document.createElement('div')
    div.innerHTML = '<strong>Поздравляем!</strong> Вы заказали вкуснейшую пиццу!'
    // div.className = "alert"
    div.classList.add("alert")
    document.body.prepend(div)

    let div2 = div.cloneNode(false)
    div2.innerHTML = "Приятного аппетита!"
    setTimeout(() => {
        div.remove()
    }, 3000);

    setTimeout(() => {
        document.body.append(div2)
    }, 6000);

    setTimeout(() => div2.remove(), 10000);
}

setTimeout(showAlert, 5000)

function scrollToSection(section) {
    let target = document.querySelector('.' + section)
    target.scrollIntoView({
        behavior: "smooth"
    })
}

const anchors = document.querySelectorAll(".container nav p")
anchors.forEach(elem => {
    elem.onclick = (e) => {
        scrollToSection(e.target.dataset.anchor)
    }
})