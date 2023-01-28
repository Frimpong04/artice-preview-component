//SELECTORS
const shareDivBtn = document.querySelector(".share-div");
// const authorDiv = document.querySelector(".author-div");
// const activeShareBtn = document.querySelector(".share-div-2");
const activeShareDiv = document.querySelector(".share-div-active");
const shareIcon = document.querySelector(".share-icon");
const shareDiv = document.querySelector(".share-div");

//FUNCTION DEFINITIONS
function showShareLinks() {
    console.log("I have been clicked");
    activeShareDiv.classList.toggle("show-share-div-active");
    shareIcon.classList.toggle("share-icon-active");
    shareDiv.classList.toggle("share-div-active-bg");
}


//EVENT LISTENERS
shareDivBtn.addEventListener("click", showShareLinks);