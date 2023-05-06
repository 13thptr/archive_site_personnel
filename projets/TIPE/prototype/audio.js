const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const oscillator = audioContext.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 440; // value in hertz

const gainNode = audioContext.createGain();
gainNode.gain.value = 0;

oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

oscillator.start();

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
