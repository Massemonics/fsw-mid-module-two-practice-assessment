const emojis = [
    '😀','😆','😅','🤣','🙃','😍','😡','🥶','😱','👻',
    '👾','😻','💋','👅','🧵','👠','🥾','👑','🎓','🐔',
    '🐧','🦄','🦇','🌲','🎄','🌊','🍓','🍍','🥯','🌭',
    '🍕','🍣','🥡','🤸','🎯','🧨','🔮','💉','🦠','❤️',
    '🧡','💛','💚','💙','💜','☢️','🚫','💯','🔱','🎊',
    '😂','😋','🐻','🐷','🍑','💎'
]
let emojiString =''

let emojiBanner = document.getElementById("emojis")
emojiBanner.textContent = emojis

document.addEventListener("DOMContentLoaded", () => {

let number = document.getElementById("story-length-input")
let descri = document.getElementById("description-input")

let textArea = document.getElementById("emojiHistory")
let orderList = document.createElement('ol')
textArea.appendChild(orderList)

let generate = document.getElementById("generate-story-btn")
let submit = document.getElementById("submit-description-btn")

let randomStory = document.querySelector("#emoji-story")
let historyTitle = document.getElementById("history-title")

generate.addEventListener('click', (evn) =>{
    evn.preventDefault()

    //let randomStory = document.querySelector("#emoji-story")
    console.log(randomStory.textContent)
    console.log(`num: ${number.value}`)
   
    
    randomStory.textContent = getRandom(number.value,emojis,orderList)
  

})

submit.addEventListener('click', (even)=>{
    even.preventDefault()
  
    let list = document.createElement('li')
    orderList.appendChild(list)
    list.textContent = `${descri.value} \f ${randomStory.textContent}`
    let n = orderList.childElementCount
    if(n === 1) 
    {historyTitle.textContent = `${n} Saved Story`}
    else 
    {historyTitle.textContent = `${n} Saved Stories`}

    

})


function getRandom(){

    let emojiString = ''
    for (let i=0; i<number.value; i++){
    let randomIndex = Math.floor(Math.random() * Math.floor(emojis.length));
    emojiString +=emojis[randomIndex]
    }

 
    // let list = document.createElement('li')
    // orderList.appendChild(list)
    // list.textContent = `${descri.value} \f ${emojiString}`


    return emojiString
}



   





})