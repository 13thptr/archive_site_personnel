const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 440; // value in hertz

const gainNode = audioContext.createGain();
gainNode.gain.value = 0;

oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

oscillator.start();

//La ligne suivante permettrait de démarrer véritablement le contexte audio dans le cas où il serait créé
//avant une interaction utilisateur, et donc automatiquement mis en mode inactif par le navigateur.
document.addEventListener('click', () => audioContext.resume(), { once: true });

document.querySelector('#wave').addEventListener('change', (e) => {
    oscillator.type = e.target.value;
});

/*document.querySelector('#frequency').addEventListener('input', (e) => {
oscillator.frequency.value = e.target.value;
});
*/


document.querySelector('#volume').addEventListener('input', (e) => {
    gainNode.gain.value = e.target.value * 0.01;
});


//Mon code

//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices

function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voiceSelect").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


let dmr= document.getElementById("dmr");
dmr.onclick=()=>{
    let phrase="Position initialisée. Vous pouvez avancer jusqu'au point de tir avant de cliquer sur le bouton";
    let utterance = new SpeechSynthesisUtterance(phrase);
    speechSynthesis.speak(utterance);
};
