

var tabTitles = document.getElementsByClassName("tab-title");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tabTitle of tabTitles){
        tabTitle.classList.remove("active-title");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-title")
    document.getElementById(tabname).classList.add("active-tab")
}