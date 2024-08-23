const basket = document.getElementById('basket');
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');

let basketPosition = 160; // Start position of the basket
let ballPositionX = Math.random() * 380;
let ballPositionY = 0;
let ballSpeed = 2;
let score = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === 'ArrowRight' && basketPosition < 320) {
        basketPosition += 20;
    }
    basket.style.left = basketPosition + 'px';
});

function dropBall() {
    ballPositionY += ballSpeed;
    ball.style.top = ballPositionY + 'px';
    ball.style.left = ballPositionX + 'px';

    // Check if the ball is caught by the basket
    if (
        ballPositionY >= 580 &&
        ballPositionX >= basketPosition &&
        ballPositionX <= basketPosition + 80
    ) {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        resetBall();
    }

    // Reset the ball if it reaches the bottom without being caught
    if (ballPositionY > 600) {
        resetBall();
    }

    requestAnimationFrame(dropBall);
}

function resetBall() {
    ballPositionY = 0;
    ballPositionX = Math.random() * 380;
    ballSpeed += 0.2; // Increase speed after each catch
    ball.style.left = ballPositionX + 'px';
}

dropBall();
