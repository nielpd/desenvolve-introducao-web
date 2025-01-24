let currentMusic = 0;

const music = document.querySelector("#audio");

const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const disk = document.querySelector(".disk");
const current = document.querySelector(".current-time");
const totalDuration = document.querySelector(".song-duration");
const playButton = document.querySelector(".play-btn");

playButton.addEventListener("click", () => {
  if (playButton.classList.contains("pause")) {
    music.play();
  } else {
    music.pause();
  }
  playButton.classList.toggle("pause");
  disk.classList.toggle("play");
});

const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;
  music.src = song.path;
  songName.innerHTML = song.name;
  disk.style.backgroundImage = `url('${song.cover}')`;

  current.innerHTML = "00:00";
  setTimeout(() => {
    seekBar.max = music.duration;
    totalDuration.innerHTML = formatTime(music.duration);
  }, 300);
};

setMusic(0);

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }

  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
};

setInterval(() => {
  seekBar.value = music.currentTime;
  current.innerHTML = formatTime(music.currentTime);
}, 500);
