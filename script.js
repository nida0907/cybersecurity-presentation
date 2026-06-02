let slides =
document.querySelectorAll(".slide");

let current = 0;

function updateProgress(){

let percent =
((current+1)/slides.length)*100;

document
.getElementById("progress")
.style.width =
percent + "%";

}

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index]
.classList
.add("active");

updateProgress();

}

function nextSlide(){

if(current < slides.length-1){

current++;

showSlide(current);

}

}

function prevSlide(){

if(current > 0){

current--;

showSlide(current);

}

}

document.addEventListener(
"keydown",
function(e){

if(e.key==="ArrowRight"){

nextSlide();

}

if(e.key==="ArrowLeft"){

prevSlide();

}

}
);

showSlide(current);