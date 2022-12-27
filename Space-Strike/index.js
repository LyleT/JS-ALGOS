let enemy1 = new Image();
let enemy2 = new Image();
let enemy3 = new Image();

const init = () => {
  enemy1.src = "./assets/images/reddalek-pixilart.png";
  enemy2.src = "./assets/images/yellowdalek-pixilart.png";
  enemy3.src = "./assets/images/blackdalek-pixilart.png";
  window.requestAnimationFrame(draw);
};

const draw = () => {
  const ctx = document.querySelector("#canvas").getContext("2d");
  window.requestAnimationFrame(draw);
};

init();

let player = document.querySelector(".player-img");

const rightMove = () => {
  player.style.transform = "translate(10px, 0)";
};

const leftMove = () => {
  player.style.transform = "translate(-10px, 0);";
};

const upMove = () => {
  player.style.transform = "translate(0, -10px);";
};

const downMove = () => {
  player.style.transform = "translateY(0, 10px);";
};
// function move_img(str) {
//   var step = 50; // change this to different step value
//   switch (str) {
//     case "down":
//       var x = document.getElementById("i1").offsetTop;
//       x = x + step;
//       document.getElementById("i1").style.top = x + "px";
//       break;

//     case "up":
//       var x = document.getElementById("i1").offsetTop;
//       x = x - step;
//       document.getElementById("i1").style.top = x + "px";
//       break;

//     case "left":
//       var y = document.getElementById("i1").offsetLeft;
//       y = y - step;
//       document.getElementById("i1").style.left = y + "px";
//       break;

//     case "right":
//       var y = document.getElementById("i1").offsetLeft;
//       y = y + step;
//       document.getElementById("i1").style.left = y + "px";
//       break;
//   }
// }
