const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// Background:
const backgroundImg = new Image();
backgroundImg.src = "./image/background.png";

const groundImg = new Image();
groundImg.src = "./image/ground.png";

// Image Bird: 
const birdImg = new Image();
birdImg.src = "./image/bird.png";

const birdImg_up = new Image();
birdImg_up.src = "./image/bird-up.png";

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

        // this.degree = Math.PI / 180;
        // this.rotation = 0;
    }
    draw() {
        let bird_animation = this.animation[this.frame];
        // c.save();
        // c.translate(this.x, this.y);
        // c.rotate(this.rotation);
        c.drawImage(bird_animation, this.x, this.y, this.width, this.height);
        // c.restore();
    }
    flap() {
        this.speed = -this.jump;
    }
    update() {
        // Tăng frame lên 1 theo mỗi giai đoạn
        this.frame += this.frames % 5 == 0 ? 1 : 0;
        // Tăng từ 0 lên 4, sau đó trả về 0
        this.frame = this.frame % this.animation.length;

        this.speed += this.gravity;
        this.y += this.speed;

        if (this.y >= canvas.height - 130) {
            this.y = canvas.height - 130;
        }
        // if(this.speed > this.jump){
        //     this.rotation = 90 * this.degree;
        // } else {
        //     this.rotation = -20 * this.degree;
        // }
    }
}

class Background {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.xGround = 0;
        this.widthGround = 1800;
        this.heightGround = 111;
        this.dx = 2;
    }
    draw(){
        c.drawImage(backgroundImg, this.x, this.y);
    }
    drawGround(){
        c.drawImage(groundImg, this.xGround, this.height, this.widthGround, this.heightGround);
    }
    update(){
        this.xGround = (this.xGround - this.dx) % (this.widthGround / 2);
    }
}

let bird = new Bird(canvas.width / 4, canvas.height / 4);
let background = new Background(0, 0, 900, 393);

addEventListener("click", function () {
    bird.flap();
    FLAP.play();
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    background.drawGround();
    background.update();

    bird.update();
    bird.draw();

    bird.frames++;
    requestAnimationFrame(animate);
}

animate();