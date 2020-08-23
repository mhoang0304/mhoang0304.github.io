const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// Background:
const background = new Image();
background.src = "./image/background.png";

// Image Bird:
// Bay thẳng:
const birdImg = new Image();
birdImg.src = "./image/bird.png";

// Bay lên:
const birdImg_up = new Image();
birdImg_up.src = "./image/bird-up.png";

// Bay xuống:
const birdImg_down = new Image();
birdImg_down.src = "./image/bird-down.png";

//Sound:
const FLAP = new Audio();
FLAP.src = "./audio/sfx_flap.wav";

const DIE = new Audio();
DIE.src = "./audio/sfx_die.wav";

class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 34;
        this.height = 25;
 
        this.score = 0;
        this.frame = 0;
        this.frames = 0;
        this.animation = [birdImg_up, birdImg, birdImg_down, birdImg];
    }
    drawBackround() {
        c.drawImage(background, 0, 0);
    }
    drawBird() {
        let bird_animation = this.animation[this.frame];

        c.drawImage(bird_animation, this.x, this.y, this.width, this.height);
    }
    fly() {
        if (this.y >= canvas.height - 130) {
            this.y += 0;
        }
        else {
            this.y += 2;
        }
    }
    update() {
        this.frame += this.frames % 5 == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;
    }
}

let bird = new Bird(canvas.width / 3, canvas.height / 2);

addEventListener("keydown", function () {
    bird.y -= 60;
    FLAP.play();
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    bird.drawBackround();
    bird.update();
    bird.fly();
    bird.drawBird();

    bird.frames++;
    requestAnimationFrame(animate);
}

animate();