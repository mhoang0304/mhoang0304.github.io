const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// Background:
const background = new Image();
background.src = "./image/background.png";

// Image Bird: Bay thẳng:
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

        this.gravity = 0.25;
        this.jump = 4.6;
        this.speed = 0;
 
        this.score = 0;
        this.frame = 0; // Frame theo chuyển động con chim
        this.frames = 0; // Frames theo số khung hình
        this.animation = [birdImg_up, birdImg, birdImg_down, birdImg];

        this.degree = Math.PI / 180;
        this.rotation = 0;
    }
    drawBackround() {
        c.drawImage(background, 0, 0);
    }
    drawBird() {
        let bird_animation = this.animation[this.frame];
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);
        c.drawImage(bird_animation, -this.width / 2, -this.height / 2, this.width, this.height);
        c.restore();
    }
    flap(){
        this.speed = -this.jump;
    }
    update() {
        // Tăng frame lên 1 theo mỗi giai đoạn
        this.frame += this.frames % 5 == 0 ? 1 : 0;
        // Tăng từ 0 lên 4, sau đó trả về 0
        this.frame = this.frame % this.animation.length;

        this.speed += this.gravity;
        this.y += this.speed; 

        if (this.y >= canvas.height - 120) {
            this.y = canvas.height - 120;
        }

        if(this.speed > this.jump){
            this.rotation = 90 * this.degree;
        } else {
            this.rotation = -20 * this.degree;
        }
    }
}

let bird = new Bird(canvas.width / 4, canvas.height / 4);

addEventListener("click", function () {
    bird.flap();
    FLAP.play();
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    bird.drawBackround();
    bird.update();
    bird.drawBird();

    bird.frames++;
    requestAnimationFrame(animate);
}

animate();