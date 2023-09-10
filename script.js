// Ein Großteil des Scripts habe ich von: https://www.w3schools.com/howto/howto_js_tabs.asp

function onLoadFunctions(){
    document.getElementById("codeBtn").classList.add('focused');
}
window.onload = onLoadFunctions;

function openCode() {

    document.getElementById("codeBtn").classList.add('focused');
    document.getElementById("consoleBtn").classList.remove('focused');

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById("Code").style.display = "block";
    evt.currentTarget.className += " active";
}

function openConsole() {

    document.getElementById("codeBtn").classList.remove('focused');
    document.getElementById("consoleBtn").classList.add('focused');

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById("Console").style.display = "block";
    evt.currentTarget.className += " active";
}