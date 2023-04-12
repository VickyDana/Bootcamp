
// let mySlides= document. querySelector(".mySlides");
// let foward= document. querySelector(".foward");
// let previous= document. querySelector(".previous");


 let images=["rainbow1.jpg","rainbow2.jpg","rainbow3.jpg", "rainbow4.jpg"]
 let index = 0;
 img= document.getElementById('image')
 

 function next() {
   // img= document.getElementById('image')
   //  img.src= images[index];
    //console.log (show);
    index ++

    if(index >=images.length){
        index = 0;

    }
    img.src= images[index];
 }

 function previous() {
   // img= document.getElementById('image')
   //  img.src= images[index];
    //console.log (show);
    index --


   if(index < 0) {
      index= images.length-1

    
   }
   img.src= images[index];
 }

 



__