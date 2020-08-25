const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// Background:
const backgroundImg = new Image();
backgroundImg.src = "./image/background.png";

const groundImg = new Image();
groundImg.src = "./image/ground.png";

const pipe_bottom = new Image();
pipe_bottom.src = "./image/pipe-bottom.png";

const pipe_top = new Image();
pipe_top.src = "./image/pipe-top.png";

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
        // c.translate(0, 0);
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

        if (this.y >= canvas.height - background.heightGround - this.height) {
            this.y = canvas.height - background.heightGround - this.height;
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

        this.arr = [];
        this.widthPipe = 52;
        this.heightPipe = 400;
        this.gap = 105; // Khoảng cách 2 ống
        this.maxYPipe = -160;
        this.dxPipe = 2;
    }
    draw(){
        c.drawImage(backgroundImg, this.x, this.y, this.width, this.height);
    }
    drawGround(){
        c.drawImage(groundImg, this.xGround,canvas.height- this.heightGround, this.widthGround, this.heightGround);
    }
    update(){
        this.xGround = (this.xGround - this.dx) % (this.widthGround / 2);

        // Tạo tao độ cho ống
        if(bird.frames % 100 == 0){
            this.arr.push({
                x: canvas.width, // Toạ độ bắt đầu ở ngoài màn hình
                y: this.maxYPipe * (Math.random() + 1) // Toạ độ Y nằm trong khoảng xấp xỉ -160 đến -320
            });
        }
        for(let i = 0; i < this.arr.length; i++){
            let p = this.arr[i];

            p.x -= this.dxPipe; // Di chuyển ống

            // Xoá ống trong mảng khi di chuyển ra khỏi màn hình
            if(p.x + this.widthPipe <= 0){
                this.arr.shift();
            }
        }
    }
    drawPipe(){
        for(let i = 0; i < this.arr.length; i++){
            let p = this.arr[i];

            let topYPipe = p.y;
            let botYPipe = p.y + this.heightPipe + this.gap;

            // Top Pipe:
            c.drawImage(pipe_top, p.x, topYPipe, this.widthPipe, this.heightPipe);

            // Bottom Pipe:
            c.drawImage(pipe_bottom, p.x, botYPipe, this.widthPipe, this.heightPipe);
        }
    }
}

let bird = new Bird(canvas.width / 4, canvas.height / 4);
let background = new Background(0, 0, 900, 500);

addEventListener("click", function () {
    bird.flap();
    FLAP.play();
})

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    background.update();
    background.drawPipe();
    background.drawGround();

    bird.update();
    bird.draw();

    bird.frames++;
    requestAnimationFrame(animate);
}

animate();