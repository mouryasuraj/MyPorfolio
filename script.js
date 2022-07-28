

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

