let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

    let randomNum1 = Math.floor(Math.random()*fighters.length)
    let randomNum2 = Math.floor(Math.random()*fighters.length)

    let fighter1=randomNum1
    let fighter2=randomNum2

    stageEl.textContent= fighters[randomNum1]+" vs "+fighters[randomNum2]

})
