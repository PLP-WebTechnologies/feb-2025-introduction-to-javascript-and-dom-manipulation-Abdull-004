//Change Text Content Dynamically

document.getElementById("changeTextBtn").onclick = function(){
    document.getElementById("dynamicText").textContent = "This text is ok now.😁";
};

//Modify CSS styles Via JavaScript

document.getElementById("changeStyleBtn").onclick = function(){
    const styledText =document.getElementById("styledText");
    styledText.style.color = "blue";
    styledText.style.fontSize = "20px";
    styledText.style.fontWeight = "bold";

}

//Add or remove an Element when a button is clicked

document.getElementById("AddElementsBtn").onclick = function(){
    const newElement = document.createElement("P");
    newElement.textContent = "This is a new paragraph added to the document.";
    document.getElementById("ElementContainer").appendChild(newElement);
}
document.getElementById("RemoveElementsBtn").onclick = function(){
    const container = document.getElementById("ElementContainer");
    if (container.lastChild) {
        container.removeChild (container.lastChild);
    } 
    else{
        alert("No elements to remove!");
    }
};





