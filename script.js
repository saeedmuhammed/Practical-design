// generate random images on landing page
let landPage = document.querySelector(".land-page");
let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
setInterval(function () {

    let Random = Math.floor(Math.random() * images.length);

    landPage.style.backgroundImage = "url('../images/" + images[Random] + "')";

}, 5000);
