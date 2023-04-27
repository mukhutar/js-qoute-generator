let btn = document.querySelector("#new-qoute")
let qoute = document.querySelector(".qoute")
let person = document.querySelector(".person")

let qoutes = [
    {
        qoute:"Learning to code is learning to create and innovate.",
         person : "—Enda Kenny, Taoiseach, Ireland"
    },

    {
        qoute:' Coding like poetry should be short and concise',
         person : "― Santosh Kalwar"
    },

    {
        qoute:' Make it work, make it right, make it fast.',
         person : "– Kent Beck"
    }
]

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*qoutes.length)

    qoute.textContent = qoutes[random].qoute;
    person.textContent = qoutes[random].person;
})