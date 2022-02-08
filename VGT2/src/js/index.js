let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600)

class Game {
    constructor() {
        console.log('created');
    }

    update() {
        console.log('updating');
    }

    draw() {
        console.log('drawing');
    }


}

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(ctx);

    // gameloop and passes timestamp
    requestAnimationFrame(gameLoop);
}



// requestAnimationFrame(gameLoop);
gameLoop(Date.now());