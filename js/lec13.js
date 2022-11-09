"use strict";
const btnToggle = document.getElementById("toggle-dark-mode");
function setDarkMode() {
    //first Load: check the saved Value:
    let isDark = localStorage.getItem("dark-mode") === "dark";
    if (isDark) {
        btnToggle.innerText = 'light mode';
        document.body.classList.add("dark-mode");
    }
    else {
        btnToggle.innerText = 'dark mode';
        document.body.classList.remove("dark-mode");
    }
}
//add/remove the class from the class-list
setDarkMode();
btnToggle.addEventListener("click", () => {
    let isDark = localStorage.getItem("dark-mode") === "dark";
    isDark = !isDark;
    localStorage.setItem("dark-mode", isDark ? "dark" : "light");
    //if(isDark === true){
    //localStorage.setItem("dark-mode", 'dark')
    //}else {
    //localStorage.setItem("dark-mode", 'light')
    //}
    setDarkMode();
});
