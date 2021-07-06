function setNewImage()
{
//  document.getElementById("coff1"). src="coffee images/Cappucino.jpg";
//  document.getElementById("coff1").innerHTML="Ingredients"

// var coffee=document.createElement("p")
// coffee.innerHTML="jskjdalksjdlakmlkajdlakdlkasd"
// document.getElementById("coff1").appendChild(coffee)
var image= document.getElementById("coff1")
var coffee=document.createElement("p")
coffee.innerHTML="Ingredients"
image.parentNode.replaceChild(coffee,image)

}
function setOldImage()
{
    
    document.getElementById("coff1").src="coffee images/Hazelnut.jpg"

}
