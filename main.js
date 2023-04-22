document.getElementById('check').addEventListener('click', check)

function check() {
  const day = document.getElementById('day').value.toLowerCase();

  if(day === "tuesday" || day === "thursday") {
    document.getElementById("placeToSee").innerText = "good job"
  } else if (day === "saturday" || day === "sunday") {
    document.getElementById("placeToSee").innerText = "good"
  } else {
    document.getElementById("placeToSee").innerText = "good"
  }
}
