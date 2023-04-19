
  //  let images=["rainbow1.jpg","rainbow2.jpg","rainbow3.jpg","rainbow4.jpg","rainbow5.jpg"]

let images;

if(sessionStorage.getItem("items")) {

  images = JSON.parse(sessionStorage.getItem("items"))
}

else  {

  images =["rainbow1.jpg","rainbow2.jpg","rainbow3.jpg","rainbow4.jpg","rainbow5.jpg"]

}
  let index = 0;
  img= document.getElementById('image')
 
 function Attach() {

  let slider= document.getElementById("slider").value
  if(slider == "" || images == null) {

     return alert("button link cannot be empty")
  }

 for(let index =0; index < images.length; index++) 

 if(slider == images[index]){
  
    return alert("image already exist")
  }  
       
    images.push(slider)
      document.getElementById("slider").value ='',
    sessionStorage.setItem("items",JSON.stringify(images))
    window.location.reload();
    // sessionStorage.getItem("items")
        
  }

  function Remove() {
    images.splice(index,1)
    sessionStorage.setItem("items", JSON.stringify(images))
    window.location.reload();

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


//  Automatic slide

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