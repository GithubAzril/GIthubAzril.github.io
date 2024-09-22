const navLink =document.querySelectorAll('nav a');

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navLink.forEach(otherLink => {
            otherLink.classList.remove('aktif');
        })
        link.classList.add('aktif')
    })
})

// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Define the number of flying numbers
const numNumbers = 20;

// Define the flying numbers array
let numbers = [];

// Function to generate a random number
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

// Function to generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Initialize the flying numbers array
for (let i = 0; i < numNumbers; i++) {
  numbers.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 2 - 1,
    vy: Math.random() * 2 - 1,
    number: getRandomNumber(),
    color: getRandomColor()
  });
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numNumbers; i++) {
    const num = numbers[i];

    // Update the number's position
    num.x += num.vx;
    num.y += num.vy;

    // Bounce off the edges
    if (num.x < 0 || num.x > canvas.width) {
      num.vx = -num.vx;
    }
    if (num.y < 0 || num.y > canvas.height) {
      num.vy = -num.vy;
    }

    // Draw the number
    ctx.fillStyle = num.color;
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(num.number, num.x, num.y);
  }

  requestAnimationFrame(animate);
}

// Start the animation
animate();


const textElement = document.getElementById('text');
const textWidth = textElement.offsetWidth;
const containerWidth = document.querySelector('.container').offsetWidth;

function animateText() {
  textElement.style.transform = `translateX(${containerWidth}px)`;
  setTimeout(() => {
    textElement.style.transform = `translateX(-${textWidth}px)`;
    animateText();
  }, 8000); // adjust the delay to match the animation duration
}

animateText();