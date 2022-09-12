var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const image = document.getElementById("source");
// const image2 = document.getElementById("source2");

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0,
};

const p = {
    w: 500,
    h: 500,
    x: 0,
    y: 0,
    speed: 5,
    dx: 0,
    dy: 0,
  };

  // function road() {
  //   ctx.drawImage(image2, p.x, p.y, p.w, p.h);}

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}
// function newRoad() {
//     p.x += p.dx;
//     p.y += p.dy;
  
//     // detectWalls();
//   }

function detectWalls() {
  // Left wall
  if (player.x < 0) {
    player.x = 0;
  }

  // Right Wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  // Top wall
  if (player.y < 0) {
    player.y = 0;
  }

  // Bottom Wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}
// Create Animation
function update() {
    
  clear();
  
  // road();
  // newRoad()
  
  drawPlayer();
  
  newPos();
  
  requestAnimationFrame(update);
//   road();
}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}






function Up() {
    player.dy = -p.speed;
  }
  
  function Down() {
    player.dy = player.speed;
  }
  
  function Right() {
    p.dx = p.speed;
  }
  
  function Left() {
    p.dx = -p.speed;
  }



function keyDown(e) {
  console.log(e.key);
  if (e.key === "ArrowRight" || e.key === "Right") {
    moveRight();
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" ||
    e.key == "ArrowRight" ||
    e.key == "Left" ||
    e.key == "ArrowLeft" ||
    e.key == "Up" ||
    e.key == "ArrowUp" ||
    e.key == "Down" ||
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);