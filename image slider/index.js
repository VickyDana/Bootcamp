
// let mySlides= document. querySelector(".mySlides");
// let foward= document. querySelector(".foward");
// let previous= document. querySelector(".previous");


 let images=["happy.jpg","sad.jpg","confused.jpg"]
 let index = 0;
 

 function next() {
   img= document.getElementById('image')
    img.src= images[index];
    //console.log (show);
    index ++

    if(index >=images.length){
        index = 0;

    }
 }

 function previous() {
   img= document.getElementById('image')
    img.src= images[index];
    //console.log (show);
    index --


   if(index < 0) {
      index= images.length-1
    
   }
 }

 



__