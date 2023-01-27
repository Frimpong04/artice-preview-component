//SELECTORS
const shareDivBtn = document.querySelector(".share-div");
const authorDiv = document.querySelector(".author-div");
const activeShareBtn = document.querySelector(".share-div-2");
const activeShareDiv = document.querySelector(".share-div-active");

//FUNCTION DEFINITIONS
function showShareLinks() {
    console.log("I have been clicked");
    authorDiv.classList.add("show-author-div");
    activeShareDiv.style.display = "flex";
}

function closeShareLinks() {
    console.log("I Have been closed");
    authorDiv.style.display = "flex";
    activeShareDiv.style.display = "none";
}

//EVENT LISTENERS
shareDivBtn.addEventListener("click", showShareLinks);
activeShareBtn.addEventListener("click", closeShareLinks);