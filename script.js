// Navbar

const menuElem = document.querySelector(".menu");
const navbarElem = document.querySelector(".navbar");

menuElem.addEventListener("click", () => {
  menuElem.classList.toggle("change");
  navbarElem.classList.toggle("change");
});

// End Of Navbar

// Section 2 Video

// const playPauseBtn = document.querySelector(".buttons i");
// const video = document.querySelector(".video");
// const videoBar = document.querySelector(".video-bar");

// const playPause = () => {
//   if (video.paused) {
//     video.play();
//     playPauseBtn.className = "far fa-pause-circle";
//     video.style.opacity = "0.7";
//   } else {
//     video.pause();
//     playPauseBtn.className = "far fa-play-circle";
//     video.style.opacity = "0.3";
//   }
// };

// playPauseBtn.addEventListener("click", () => {
//   playPause();
// });

// video.addEventListener("timeupdate", () => {
//   const videoBarWidth = video.currentTime / video.duration;
//   videoBar.style.width = `${videoBarWidth * 100}%`;

//   if (video.ended) {
//     playPauseBtn.className = "far fa-play-circle";
//     video.style.opacity = "0.3";
//   }
// });

// End Of Section 2 Video
