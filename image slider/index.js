
// let mySlides= document. querySelector(".mySlides");
// let foward= document. querySelector(".foward");
// let previous= document. querySelector(".previous");


 let images=["rainbow1.jpg","rainbow2.jpg","rainbow3.jpg", "rainbow4.jpg","rainbow5.jpg"]
 let index = 0;
 img= document.getElementById('image')
 

 
 function Attach() {
  // console.log(images)
  
 

  let slider= document.getElementById("slider").value
   images.push(slider)
    // console.log(images)
  sessionStorage.setItem("A",JSON.stringify (images))
  
  
  sessionStorage.getItem("A", JSON.parse)
  

  
 }

 

 function next() {
    index ++
    if(index >=images.length){
        index = 0;
    }
    img.src= images[index];
 }

 function previous() {
    index --
   if(index < 0) {
      index= images.length-1
   }
   img.src= images[index];
 }


 

//  let index = 0;
//   image();

// function image() {
//   let index;
//   let slides = document.getElementsByClassName("image");
//   for (index = 0; index < image.length; index++) {
//     image[index].style.display = "none";
//   }
//   index++;
//   if (index > image.length) {index = 1}
//   image[index-1].style.display = "block";
//   setTimeout(image, 2000); 
// }


 



