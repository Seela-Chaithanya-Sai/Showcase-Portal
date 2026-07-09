function openModal(title, date, location, description){

document.getElementById("eventModal").style.display="block";

document.getElementById("modalTitle").innerHTML=title;

document.getElementById("modalDate").innerHTML=date;

document.getElementById("modalLocation").innerHTML=location;

document.getElementById("modalDescription").innerHTML=description;

}

function closeModal(){

document.getElementById("eventModal").style.display="none";

}

window.onclick=function(event){

let modal=document.getElementById("eventModal");

if(event.target==modal){

modal.style.display="none";

}

}