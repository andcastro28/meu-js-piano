const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck    = document.querySelector(".keys-check input");


let mapateclas=[];
 let audio = new Audio("src/tunes/a.wav");
 const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => clickedKey.classList.remove("active"), 150);
 };

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapateclas.push(key.dataset.key);
});


document.addEventListener("keydown",
(e) => {

/*  if(mapateclas.includes(e.key))
{
    playTune(e.key.toLowerCase());
    console.log(e.key);
} */

    if (e.key.match(/[a-zA-Z|;]/)) {
        playTune(e.key.toLowerCase());
    }
});

const mudouVolume = (e) => {
        audio.volume = e.target.value;
     };

const showLetras = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
 };

volumeSlider.addEventListener("input", mudouVolume);
     
keysCheck.addEventListener("click", showLetras);
     
