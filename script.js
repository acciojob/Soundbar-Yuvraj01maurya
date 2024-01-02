//your JS code here. If required.
//your JS code here. If required.
// JavaScript logic for audio playback
const soundsDir = 'sounds/';

let audioElements = [];

function playSound(soundName) {
  stopAllSounds();
  const audio = new Audio(soundsDir + soundName);
  audio.play();
  audioElements.push(audio);
}

function stopAllSounds() {
  audioElements.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  audioElements = [];
}

function pauseSound() {
    audioElements.forEach(audio => {
        audio.pause();
        audio.cuurenTime = 0;
    });
    audioElements = [];
}