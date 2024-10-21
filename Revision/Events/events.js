// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function bgChange(e) {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   e.target.style.backgroundColor = rndCol;
//   e.target.style.borderRadius = '40px'
//   e.target.style.padding = '10px'
//   console.log(e);
// }

// btn.addEventListener("click", bgChange);
// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", () => video.play());
// box.addEventListener("click", () => box.classList.add("hidden"));
const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));