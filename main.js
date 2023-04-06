let wins = 0; 
let loses = 0;
const choices = ["eau", "plante", "feu"]
const gameStatus = document.getElementById("gameStatus")
const feu = document.getElementById('feu')
const eau = document.getElementById('eau')
const plante = document.getElementById('plante')
const img = document.getElementById('img')
const winner = document.getElementById('winner')
const sendMail = document.getElementById('sendMail')

let mood = {
 luffyHappy : {
    imgLuffyHappy : [
        "https://www.gamespot.com/a/uploads/screen_kubrick/1585/15855271/3788780-3013407-screenshot2016-02-26at12.40.14pm.jpg",
        "https://recantododragao.com.br/wp-content/uploads/2016/09/Pok%C3%A9mon-feliz.jpg",
        "https://i.pinimg.com/736x/90/e5/dd/90e5dd4ab8e1a1b37500b95b324f84f1.jpg",
        "https://img.20mn.fr/N44cqcYFSumSWAJyRT5QuSk/1200x768_certains-personnages-pokemon-mystery-dungeon",
        "https://lh3.googleusercontent.com/05JfZ1ZdyzrRNvhJosUFdcjjJRFE7k2KhmeM2ujqeCbrcrCb1hkq7O_JdUBpQ3r9hi0YeSn4WgmKx3Ai8LHdM2SucxSzl9TRZ4fCAqETJ6WtHgE=w1440-e365"
    ],
    textLuffyHappy : [
        "Tu es trop fort !", 
        "Tu as gagné !",
        "Continue comme ça !"
    ]
 },
 luffySad : {
    imgLuffySad: [
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2019/03/6saddestpokemonmoments-21280jpg-d63e69_1280w.jpg",
        "https://media.techtribune.net/uploads/2020/07/pokemon-saddest-moment-1228235-1280x0.jpeg",
        "https://imagens1.ne10.uol.com.br/blogsne10/oviral/2016/08/Pikachu-chorando.jpg",
        "https://image.jimcdn.com/app/cms/image/transf/none/path/s09a03e3ad80f8a02/image/i8629473c2ea6f7c1/version/1469507006/source-nintendo-pokemon-official-website.gif",
        "https://i.pinimg.com/originals/59/8c/5d/598c5da8a0cf4d50a8e55bf93307b251.jpg"
    ], 
    textLuffySad : [
        "Essai encore !",
        "Tu peux mieux faire !",
        "Baisse pas les bras !"
    ]
 }
}

function runGame(userChoice){
    const computerChoice = choices[Math.floor(Math.random()*choices.length)]
    let indexRandomIS = Math.floor(Math.random()*mood.luffySad.imgLuffySad.length)
    let indexRandomIH = Math.floor(Math.random()*mood.luffyHappy.imgLuffyHappy.length)
    let indexRandomTS = Math.floor(Math.random()*mood.luffyHappy.textLuffyHappy.length)
    let indexRandomTH = Math.floor(Math.random()*mood.luffyHappy.textLuffyHappy.length)
     
    switch(userChoice + '_' + computerChoice){
        case 'feu_eau' :
        case 'eau_plante':
        case 'plante_feu' : 
            loses += 1
            gameStatus.innerHTML = `M: ${userChoice} | c: ${computerChoice}`
            winner.innerHTML = mood.luffySad.textLuffySad[indexRandomTS]
            winner.classList.add('textlose')
            winner.classList.remove('textwin')
            img.src = mood.luffySad.imgLuffySad[indexRandomIS] 
            break
        case 'feu_plante' :
        case 'plante_eau':
        case 'eau_feu' : 
            wins += 1
            gameStatus.innerHTML = `M: ${userChoice} | c: ${computerChoice}`
            winner.innerHTML = mood.luffyHappy.textLuffyHappy[indexRandomTH]
            winner.classList.add('textwin')
            winner.classList.remove('textlose')
            img.src = mood.luffyHappy.imgLuffyHappy[indexRandomIH]
            break
        case 'feu_feu' :
        case 'eau_eau':
        case 'plante_plante' : 
            gameStatus.innerHTML = `M: ${userChoice} | c: ${computerChoice} -> Egalité`
            break
    }

    gameScore.innerHTML = `Me: ${wins} | Co: ${loses}`

    if(loses === 10){
        alert('Tu as perdu !')
        loses = 0
        wins = 0
        gameScore.innerHTML = `Me: ${wins} | Co: ${loses}`
        winner.innerText=""
    }else if(wins === 10){
        alert('tu as gagné !')
        loses =0
        wins = 0
        gameScore.innerHTML = `Me: ${wins} | Co: ${loses}`
    }
}

feu.addEventListener('click', () => runGame("feu"))
eau.addEventListener('click', () => runGame("eau"))
plante.addEventListener('click', () => runGame('plante'))
sendMail.addEventListener('click', () =>{
    window.location.href = "mailto:dwaincontact@gmail.com"
})