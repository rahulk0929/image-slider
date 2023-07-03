/* let s=0;
function controller(x){
    s=s+x                                               ;
    slideshow(s);

}



function slideshow(num){
    let slide=document.getElementsByClassName("siide");
    if(num == slide.length){
       s=0;
       num=0;
    }
    if(num < 0){
        s=slide.length-1;
       num=slide.length-1;
     }

    for(let v of slide){

        v.style.display="none";

    }
    slide[num].style.display="block";

    
}slideshow(s); */

let s=0;

function controller(x){
    s=s+x;
    slideshow(s);

}
slideshow(s);
function slideshow(n){
    let slide=document.getElementsByClassName("siide");
    if (n==slide.length){
        s=0;
        n=0;
    }
    if (n<0){
        s=slide.length-1;
        n=slide.length-1;
    }
    for (let v of slide){
        v.style.display="none";

    }
    slide[n].style.display="block";
    
}
