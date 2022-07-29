
// ---------------------About Section Sart-----------------------
var tabTitles = document.getElementsByClassName("tab-title");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tabTitle of tabTitles) {
        tabTitle.classList.remove("active-title");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-title")
    document.getElementById(tabname).classList.add("active-tab")
}


// ---------------------About Section End-----------------------
// ---------------------Portfolio Section start-----------------------

var hiddenwork1 = document.getElementById("hidden-work1");
var hiddenwork2 = document.getElementById("hidden-work2");
var button = document.getElementById("btn");
function showmore() {
    if(hiddenwork1.style.display === "block" && hiddenwork2.style.display === "block"){
        hiddenwork1.style.display = "none";
        hiddenwork2.style.display = "none";
        button.innerHTML = "Show more";
    }
    else{
        hiddenwork1.style.display="block";
        hiddenwork2.style.display="block";
        button.innerHTML = "Show less";
    }
}
// ---------------------Portfolio Section End-----------------------


// ---------------------Media Query Section Start-----------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "-30px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}




// ---------------------Media Query Section End-----------------------


