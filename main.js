const shipSize = {
  width: 30,
  height: 30
};

const position = {
  x: 200,
  y: 200
};

const moveRate = 9;
const turnRate = 5;

let angle = 0;

const spaceship = document.getElementById('spaceship');

function updatePosition(offset) {
  const rad = angle * (Math.PI / 180);
  position.x += (Math.sin(rad) * offset);
  position.y -= (Math.cos(rad) * offset);

  if (position.x < 0) {
    position.x = 399;
  } else if (position.x > 399) {
    position.x = 0;
  }

  if (position.y < 0) {
    position.y = 399;
  } else if (position.y > 399) {
    position.y = 0;
  }
}

function refresh() {
  const x = position.x - (shipSize.width / 2);
  const y = position.y - (shipSize.height / 2);
  const transform = 'translate(' + x + ' ' + y + ') rotate(' + angle + ' 15 15) ';

  spaceship.setAttribute('transform', transform);
}

window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch (event.code) {
    case 'KeyS':
    case 'ArrowDown':
      // Handle "back"
      updatePosition(-moveRate);
      break;
    case 'KeyW':
    case 'ArrowUp':
      // Handle "forward"
      updatePosition(moveRate);
      break;
    case 'KeyA':
    case 'ArrowLeft':
      // Handle "turn left"
      angle -= turnRate;
      break;
    case 'KeyD':
    case 'ArrowRight':
      // Handle "turn right"
      angle += turnRate;
      break;
  }

  refresh();

  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);
