
let grabTheButtonToPlayBackgroundMusic = document.getElementById('playMusic')
grabTheButtonToPlayBackgroundMusic.innerText = 'Play Background Music'
let mySound = new Audio('./FreeCodeCamp.mp3')
let backgroundMusic = true


grabTheButtonToPlayBackgroundMusic.addEventListener('click', () => {
    if (backgroundMusic) {
        grabTheButtonToPlayBackgroundMusic.innerText = 'Stop Background Music'
        mySound.volume = 0.25
        mySound.play()
        backgroundMusic = false
    } else {
        grabTheButtonToPlayBackgroundMusic.innerText = 'Play Background Music'
        mySound.pause()
        backgroundMusic = true
    }
})