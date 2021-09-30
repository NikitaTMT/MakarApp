/* 

const btn = document.querySelector(".btn");
const first = document.querySelector(".one");
const second = document.querySelector(".second");
const checkBtn = document.querySelector(".check")
const result = document.querySelector(".result")
const image = document.querySelector(".image")
checkBtn.addEventListener("click", getResult)

function getResult() {
    if (+first.value + +second.value === +result.value) {
        let smile = document.createElement("img");
        smile.src = "https://emojio.ru/images/apple-b/1f44d.png";
        smile.height = "100"
        image.append(smile)
        image.classList.add("hid")
        
    } else {
        let smile = document.createElement("img");
        smile.src = "https://emojio.ru/images/apple-b/1f44e.png";
        smile.height = "100"
        image.append(smile)
        first.setAttribute("0")
    }
    return
}

const refresh = document.querySelector(".refresh")
refresh.addEventListener("click", reloadPage)

function reloadPage() {
    se
 
}

function setRandom() {
    first.setAttribute("value", `${a}`)
    second.setAttribute("value", `${b}`)
}

btn.addEventListener("click", setRandom);

const a = randomNumber(100)
const b = randomNumber2(100)

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

function randomNumber2(max) {
    return Math.floor(Math.random() * max)
} */

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const startBtn = document.querySelector(".start")
const result = document.querySelector(".result")
const checkBtn = document.querySelector(".check")
const image = document.querySelector('.image')
const refresh = document.querySelector(".refresh")

startBtn.addEventListener("click", addRandom)
checkBtn.addEventListener("click", checkResult)
refresh.addEventListener("click", refreshAll)


function checkResult() {
    if (Number(first.innerHTML) + Number(second.innerHTML) === +result.value) {
        const img = document.createElement("img")
        img.src = "https://emojio.ru/images/apple-b/1f44d.png"
        img.height = 100
        image.append(img)
    } else {
        const img = document.createElement("img")
        img.src = "https://emojio.ru/images/apple-b/1f44e.png"
        img.height = 100
        image.append(img)
    }
    
}

function addRandom() {
    first.innerHTML = Random()
    second.innerHTML = Random()
    result.value = ""

}

function Random() {
    return Math.round(Math.random() * 100);
}


function refreshAll() {
    image.innerHTML = ""
    first.innerHTML = ""
    second.innerHTML = ""
    result.value = ""
    addRandom()
}












