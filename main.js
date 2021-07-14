var position = {
  moving: false,
  x: 1,
  y: 1
};

var $car = document.getElementById('car');

function updatePosition() {
  if (position.moving) {
    position.moving = false;
  } else {
    position.moving = true;
    var intervalID = setInterval(callback, 160);
  }
  function callback() {
    var $car = document.getElementById('car');
    if (!position.moving) {
      clearInterval(intervalID);
    }
    if ($car.className === 'west') {
      position.x += 10;
      $car.style.left = position.x + 'px';
    }
    if ($car.className === 'east') {
      position.x -= 10;
      $car.style.left = position.x + 'px';
    }
    if ($car.className === 'north') {
      position.y -= 10;
      $car.style.top = position.y + 'px';
    }
    if ($car.className === 'south') {
      position.y += 10;
      $car.style.top = position.y + 'px';
    }
  }
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    $car.setAttribute('class', 'north');
  }
  if (event.key === 'ArrowDown') {
    $car.setAttribute('class', 'south');
  }
  if (event.key === 'ArrowRight') {
    $car.setAttribute('class', 'west');
  }
  if (event.key === 'ArrowLeft') {
    $car.setAttribute('class', 'east');
  }
  if (event.key === ' ') {
    updatePosition();
  }

});
