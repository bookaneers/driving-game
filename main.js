var position = {
  top: 1,
  left: 1
};

var space = false;

var $car = document.getElementById('car');

function updatePosition() {
  if (space) {
    return space;
  } else {
    if ($car.class === 'west') {
      position.top = position.top + 1;
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
  if (event.key === 'Space') {
    updatePosition();

  }

});
