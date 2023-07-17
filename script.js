const pianoKeys = document.querySelectorAll(".piano-keys .key");
let volSlider = document.querySelector(".vol-slider input");
let check = document.querySelector(".keys-checkbox input");



let allKeys = [],
audio = new Audio("tunes/a.wav")
const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() =>{
        clickedKey.classList.remove("active");

    }, 150);
}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));

});

const pressedKey = (e) =>{
    if(allKeys.includes(e.key))
    playTune(e.key);
}

const handleVol = (e) => {
    audio.volume = e.target.value;
}
const handleCheck = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

check.addEventListener("click", handleCheck);
volSlider.addEventListener("input", handleVol);
document.addEventListener("keydown", pressedKey);