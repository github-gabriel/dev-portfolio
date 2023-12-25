// Ein Großteil des Scripts habe ich von: https://www.w3schools.com/howto/howto_js_tabs.asp

function onLoadFunctions(){
    document.getElementById("codeBtn").classList.add('focused');
    document.getElementsByClassName("run")[0].addEventListener("click", function (){
        openTab("Console")
    })
    document.getElementsByClassName("stop")[0].addEventListener("click", function (){
        openTab("Code")
    })
    document.getElementById("codeBtn").addEventListener("click", function (){
        openTab("Code")
    })
    document.getElementById("consoleBtn").addEventListener("click", function (){
        openTab("Console")
    })
}
window.onload = onLoadFunctions;

function openTab(tabName) {
    event.preventDefault();

    const codeBtn = document.getElementById("codeBtn");
    const consoleBtn = document.getElementById("consoleBtn");
    const tabContent = document.getElementsByClassName("tabcontent");
    const tabLinks = document.getElementsByClassName("tablinks");

    // Reset all tabs and buttons
    codeBtn.classList.remove('focused');
    codeBtn.offsetWidth;
    consoleBtn.classList.remove('focused');
    consoleBtn.offsetWidth;

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the selected tab and add "active" class to the button
    document.getElementById(tabName).style.display = "block";
    let button;
    if (tabName === "Code") {
        button = codeBtn;
    } else {
        button = consoleBtn;
    }
    button.classList.add('focused');
    void button.offsetWidth;
}
