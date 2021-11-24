/*
---  AlertIt.JS  ---  
           
$Responsive $Alert

#Programmer [Arnav Gumber]

// © Copyright - All rights reserved \\

|-- Advantages --|

~~ Custom Buttons ~~
~~ Hover Effects ~~
~~ Custom Text ~~
~~ Responsive ~~
~~ Secure ~~

|-- Disadvantages --|

!~ In some rare cases, it may produce unvanted errors ~!

| Reason:- Same IDs; Tags or Functions |
*/
function doAlert(event) {
    var onclick_alert = event.target.getAttribute("alertID");
    var alertBox = document.getElementById(onclick_alert);
    var alertValue = alertBox.getAttribute("alertValue");
    var buttonValue = alertBox.getAttribute("buttonValue");
    alertBox.innerHTML = "<br><p style='margin-left:10%;width:80%;font-size:125%;display:inline-block;'>" + alertValue + "</p><br><button onclick='closeAlert()' id='alertButton' style='background:white;color:blue;margin-left:20%;font-size:100%;border:solid 1px blue;min-width:20%;border-radius:10px;padding-left:10px;padding-right:10px;' onmouseover='changecol()' onmouseout='changeColor()'>" + buttonValue + "</button><br><br>";
    alertBox.style.width = "50%";
    alertBox.style.marginLeft = "25%";
    alertBox.style.marginTop = "20px";
    alertBox.style.zIndex = "100";
    alertBox.style.position = "absolute";
    alertBox.style.position = "fixed";
    alertBox.style.border = "solid 2px gray";
    alertBox.style.borderRadius = "20px";
    alertBox.style.display = "block";
    alertBox.style.background = "white";
    alertBox.style.webkitTouchCallout = "none";
    alertBox.style.userSelect = "none";
}

function closeAlert() {
    document.getElementById("alert1").style.display = "none";
}

function changecol() {
    var alertButton = document.getElementById("alertButton");
    alertButton.style.color = "white";
    alertButton.style.background = "blue";
    alertButton.style.cursor = "pointer";
}

function changeColor() {
    alertButton.style.color = "blue";
    alertButton.style.background = "white";
}
