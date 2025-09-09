
var csr= document.getElementById("movee");
var cr= document.getElementById("mov1");


document.addEventListener("mousemove" , function (dets) {
     csr.style.left = dets.x + "px"
     csr.style.top = dets.y + "px";
     cr.style.left  = dets.x-100 + "px"
     cr.style.top = dets.y-100 + "px";
})