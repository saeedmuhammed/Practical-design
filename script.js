// show and hide settings menu
let gear = document.querySelector(".settings .icon");
gear.addEventListener("click", () => {
    document.querySelector(".settings").classList.toggle("toggle");
    document.querySelector(".settings .icon i").classList.toggle("togglei");
    
});




//get the main color from local storage
if (window.localStorage.getItem("--main-color") != null) {
    document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("--main-color"));
}
else {
    document.documentElement.style.setProperty("--main-color", document.documentElement.style.getPropertyValue("--main-color"));
}

//get the random background value from local storage
let randomInterval;
let randomBackgroundLocalStorage = window.localStorage.getItem("rand-background");
if (randomBackgroundLocalStorage !== null) {
    if (randomBackgroundLocalStorage === 'true') {
        randomImages(true);
        document.querySelector(".settings .body .options span.no").classList.remove("active");
        document.querySelector(".settings .options span.yes").classList.add("active");

    }
    else {
        randomImages(false);
        document.querySelector(".settings .options span.yes").classList.remove("active");
        document.querySelector(".settings .options span.no").classList.add("active");
    }
}
else {
    randomImages(true);
}




//change to color of whole webstie from settings menu
let colors = document.querySelectorAll(".settings .body ul li");

colors.forEach((element) => {

    element.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        window.localStorage.setItem("--main-color", e.target.dataset.color);

    });

});

// add avtive class to clicked button to stop or continue radnom background
let randomBackgroundOption = document.querySelectorAll(".settings .body .options span");
randomBackgroundOption.forEach((span) => {
    span.addEventListener("click", (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
            if (e.target.innerHTML === "Yes") {
                randomImages(true);
                window.localStorage.setItem("rand-background", true);
            }
            else {
                randomImages(false);
                window.localStorage.setItem("rand-background", false);
            }
        });
        e.target.classList.add("active");
    });

});


function randomImages(boolean) {
    // generate random images on landing page
    let landPage = document.querySelector(".land-page");
    let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
    if (boolean) {
        randomInterval = setInterval(() => {

            let Random = Math.floor(Math.random() * images.length);

            landPage.style.backgroundImage = "url('../images/" + images[Random] + "')";

        }, 10000);

    }
    else {

        clearInterval(randomInterval);
        landPage.style.backgroundImage = "url('../images/01.jpg')";
    }

};
// Our Skills Progress
let skillsSection = document.querySelector(".skills");

window.onscroll = function () {
    //height of the section
    let sectionHeight = skillsSection.offsetTop;

    //height of paading and border
    let outerHeight = skillsSection.offsetHeight;

    //All height of section borders and padding + body of the section
    let allHeight = sectionHeight + outerHeight;

    // height of the window
    let windowHeight = this.innerHeight;

    //offset of where do you stop scrolling 
    let windowScroll = this.pageYOffset;

    if (windowScroll > sectionHeight + outerHeight - windowHeight) {
        let allSkills = document.querySelectorAll(".skills .skill .bar span");

        allSkills.forEach((skill) => {

            skill.style.width = skill.dataset.value;

        });

    }

};

// The Gallery Section 
let allImages = document.querySelectorAll(".gallery .images img");
allImages.forEach(img => {

    img.addEventListener("click", (e) => {


        //create the overlay
        let overlay = document.createElement("div");
        overlay.className = "gallery-overlay";
        document.body.appendChild(overlay);

        //create the popup
        let popup = document.createElement("div");
        popup.className = "pop-up";
        document.body.appendChild(popup);

        //create image title
        if (img.alt !== null) {
            let imgTitle = document.createElement("h1");
            imgTitle.textContent = img.alt;
            imgTitle.className = "image-title";
            popup.appendChild(imgTitle);
        }
        let image = document.createElement("img");
        image.src = e.target.src;
        popup.appendChild(image);

        //close popup
        let close = document.createElement("span");
        close.textContent = "X";
        popup.appendChild(close);

        //close the popup window when click on X
        close.addEventListener("click", (e) => {

            e.target.parentElement.remove();
            document.querySelector(".gallery-overlay").remove();

        });
    });
});

//scroll from navbar 
let allLinks = document.querySelectorAll(".land-page .header .links ");
allLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{
        e.preventDefault()
         document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior:'smooth'
         }); 
    });



});