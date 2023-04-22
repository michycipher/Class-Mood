document.getElementById('check').addEventListener('click', run)

function run() {
  const day = document.getElementById('day').value

  if(day === 'tuesday' || day === 'thursday' ) {
    document.getElementById('placeToSee').innerText = 'cool'
  } else if (day === 'sunday' || day === 'saturday') {
    document.getElementById('placeToSee').innerText = 'super'
  } else {
    document.getElementById('placeToSee').innerText = 'yo! not cool'
  }
}
