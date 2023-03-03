let index=1;
showSlide(index);

function plusSlide(n){
    showSlide(index+=n);
}

function currentslide(n){
    showSlide(index=n);
}

function showSlide(n){
    let i;
    let slides= document.getElementsByClassName("slide");
    if(n>slides.length){
        index=1;
    }if(n<1){
        index=slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[index-1].style.display="block";
    
}