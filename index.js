document.getElementById("reloadButton").addEventListener("click", handleReload);

function handleReload() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomImage1Source = "images/dice" + randomNumber1 + ".png";
  var image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomImage1Source);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var randomImage2Source = "images/dice" + randomNumber2 + ".png";
  var image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomImage2Source);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins🎲";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins🎲";
  } else {
    document.querySelector("h1").innerHTML = "Draw🎲🎲";
  }
}
