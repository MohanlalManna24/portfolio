const starCursor = document.getElementById('star-cursor');
const homeSection = document.getElementById('home');

// Pick a random color for the star
function randomColor() {
  const colors = [
    '#ff3cac', '#784ba0', '#2b86c5', '#42e695', '#fffd82',
    '#ff9a00', '#ff165d', '#845ec2', '#ffc75f', '#f9f871'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Create and animate a star at (x, y)
function createStar(x, y) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = `${x - 9}px`;
  star.style.top = `${y - 9}px`;
  star.style.background = `radial-gradient(circle, ${randomColor()} 60%, #fff 100%)`;
  star.style.boxShadow = `0 0 16px 4px ${randomColor()}, 0 0 32px 8px #fff`;
  star.style.opacity = 1;
  star.style.transform = `scale(${0.7 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`;

  // Make the star fly away in a random direction
  const angle = Math.random() * 2 * Math.PI;
  const distance = 80 + Math.random() * 220;
  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  starCursor.appendChild(star);

  // Animate the star
  setTimeout(() => {
    star.style.transition = 'opacity 1.2s, transform 1.2s, left 1.2s, top 1.2s';
    star.style.left = `${x + dx}px`;
    star.style.top = `${y + dy}px`;
    star.style.opacity = 0;
    star.style.transform += ' scale(1.7)';
  }, 10);

  // Remove the star after animation
  setTimeout(() => {
    star.remove();
  }, 1300);
}

// Show star effect only on #home, but NOT on .wrapper or .btn
homeSection.addEventListener('mousemove', (e) => {
  const wrapper = document.querySelector('.wrapper');
  const btn = document.querySelector('.btn');

  // If mouse is over .wrapper, stop the effect
  if (wrapper) {
    const w = wrapper.getBoundingClientRect();
    if (
      e.clientX >= w.left && e.clientX <= w.right &&
      e.clientY >= w.top && e.clientY <= w.bottom
    ) {
      starCursor.style.display = 'none';
      return;
    }
  }

  // If mouse is over .btn, stop the effect
  if (btn) {
    const b = btn.getBoundingClientRect();
    if (
      e.clientX >= b.left && e.clientX <= b.right &&
      e.clientY >= b.top && e.clientY <= b.bottom
    ) {
      starCursor.style.display = 'none';
      return;
    }
  }

  // Get mouse position inside #home
  const rect = homeSection.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Show the star effect
  starCursor.style.display = 'block';
  starCursor.style.position = 'absolute';
  starCursor.style.left = '0';
  starCursor.style.top = '0';
  starCursor.style.width = `${rect.width}px`;
  starCursor.style.height = `${rect.height}px`;

  // Create several stars
  for (let i = 0; i < 7; i++) {
    createStar(x, y);
  }
});

// Hide the effect when mouse is outside #home
document.addEventListener('mousemove', (e) => {
  const rect = homeSection.getBoundingClientRect();
  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    starCursor.style.display = 'none';
  }
});