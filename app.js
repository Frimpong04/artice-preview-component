//SELECTORS
const shareDiv = document.querySelector(".share-div");
const activeShareBtn = document.querySelector(".share-div-2");
const authorDiv = document.querySelector(".author-div");
const activeShareDiv = document.querySelector(".share-div-active");

//FUNCTION DEFINITIONS
function showShareLinks() {
    console.log("I have been clicked");
    authorDiv.style.display = "none";
    activeShareDiv.style.display = "flex";
}

function closeShareLinks() {
    console.log("I Have been closed");
    authorDiv.style.display = "flex";
    activeShareDiv.style.display = "none";
}

//EVENT LISTENERS
shareDiv.addEventListener("click", showShareLinks);
activeShareBtn.addEventListener("click", closeShareLinks);