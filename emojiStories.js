const emojis = [
    '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
    '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
    '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
    '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
    '🧡','💛','💚','💙','💜','☢️','🚫','💯','🔱','🎊',
    '😂','😋','🐻','🐷','🍑','💎','X'
]

let emojiBanner = document.getElementById("emojis")
emojiBanner.textContent = emojis


document.addEventListener("DOMContentLoaded", () => {

console.log("Working....")

let number = document.getElementById("story-length-input")

number.addEventListener('change', () =>{
    console.log(number)
    console.log(number.value)
 
})


let descri = document.getElementById("description-input")
descri.addEventListener('change', () =>{
    console.log(descri)
    console.log(descri.value)
})






let submit = document.getElementById("generate-story-btn")

submit.addEventListener('click', (evn) =>{
    evn.preventDefault()

    console.log("I was clicked")
    let randomStory = document.querySelector("#emoji-story")
    console.log(randomStory.textContent)
    console.log(`num: ${number.value}`)
    console.log(getRandom(number.value,emojis))
    


})




function getRandom(){

    let emojiString = ''
    console.log(`num fn: ${number.value}`)
    console.log(`emojis: ${emojis}`)
    console.log(`length: ${emojis.length}`)
    for (let i=1; i<number.value; i++){
    let randomIndex = Math.floor(Math.random() * Math.floor(emojis.length));
    
    console.log(randomIndex)

    emojiString +=emojis[randomIndex]
    }

    return emojiString
}




})