// show and hide settings menu
let gear = document.querySelector(".settings .icon");
gear.addEventListener("click", () => {
    document.querySelector(".settings").classList.toggle("toggle");
    document.querySelector(".settings .icon i").classList.toggle("togglei");
});

//get the main color from local storage
if(window.localStorage.getItem("--main-color")!= null){
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("--main-color"));
}
else {
    document.documentElement.style.setProperty("--main-color", document.documentElement.style.getPropertyValue("--main-color"));
}

//get the random background value from local storage
let randomInterval;
let randomBackgroundLocalStorage = window.localStorage.getItem("rand-background");
if(randomBackgroundLocalStorage !==null){
    if(randomBackgroundLocalStorage ==='true'){
        randomImages(true);
        document.querySelector(".settings .body .options span.no").classList.remove("active");
        document.querySelector(".settings .options span.yes").classList.add("active");
        
    }
    else{
        randomImages(false);
        document.querySelector(".settings .options span.yes").classList.remove("active");
        document.querySelector(".settings .options span.no").classList.add("active");
    }
}
else{
    randomImages(true);
}




//change to color of whole webstie from settings menu
let colors = document.querySelectorAll(".settings .body ul li");

colors.forEach((element) => {

    element.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        window.localStorage.setItem("--main-color",e.target.dataset.color);

    });

});

// add avtive class to clicked button to stop or continue radnom background
let randomBackgroundOption = document.querySelectorAll(".settings .body .options span");
randomBackgroundOption.forEach((span)=>{
span.addEventListener("click",(e)=>{

    e.target.parentElement.querySelectorAll(".active").forEach((element)=>{
    element.classList.remove("active");
    if(e.target.innerHTML === "Yes"){
        randomImages(true);
        window.localStorage.setItem("rand-background",true);
    }
    else{
        randomImages(false);
        window.localStorage.setItem("rand-background",false);
    }
    });
    e.target.classList.add("active");
    });
    
});





function randomImages(boolean){
// generate random images on landing page
let landPage = document.querySelector(".land-page");
let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
if(boolean){
randomInterval = setInterval(() => {

    let Random = Math.floor(Math.random() * images.length);

    landPage.style.backgroundImage = "url('../images/" + images[Random] + "')";

}, 10000);

}
else{

    clearInterval(randomInterval);
    landPage.style.backgroundImage = "url('../images/01.jpg')";
}

};

