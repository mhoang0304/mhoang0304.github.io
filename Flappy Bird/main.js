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

class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.score = 0;
        this.frame = 0;
        this.animation = [birdImg_up, birdImg, birdImg_down, birdImg];
    }
    drawBackround() {
        c.drawImage(background, 0, 0);
    }
    drawBird() {
        let bird_animation = this.animation[this.frame];

        c.drawImage(bird_animation, this.x, this.y);
    }
    fly() {
        if (bird.y >= canvas.height - 130) {
            bird.y += 0;
        } else {
            bird.y += 2;
        }
    }
    update() {
        this.frame += (bird.frames % 4) == 0 ? 0 : 1;
    }
}

let bird = new Bird(canvas.width / 3, canvas.height / 2);
let frames = 0;

addEventListener("keydown", function () {
    bird.y -= 60;
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    bird.drawBackround();
    bird.drawBird();
    bird.fly();
    // bird.update();

    frames++;

    requestAnimationFrame(animate);
}

animate();