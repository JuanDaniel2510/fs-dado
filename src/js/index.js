const dots = new Array(6);
for (let i = 0; i < 7; i++) { dots[i] = document.querySelector('#point' + (i + 1)); }

function launch () {
  const num = getRandomFace();
  console.log(num);
  switch (num) {
    case 1:
      show([4]);
      break;
    case 2:
      show([1, 7]);
      break;
    case 3:
      show([1, 4, 7]);
      break;
    case 4:
      show([1, 2, 6, 7]);
      break;
    case 5:
      show([1, 2, 4, 6, 7]);
      break;
    case 6:
      show([1, 2, 3, 5, 6, 7]);
      break;
  }
}

function getRandomFace () {
  return Math.floor((Math.random() * 6) + 1);
}

function show (points) {
  for (let i = 0; i < dots.length; i++) { dots[i].classList.add('hide'); }
  for (let j = 0; j < points.length; j++) { dots[points[j] - 1].classList.remove('hide'); }
}

document.getElementById('push').addEventListener('click', launch);
