 /*function calcAge (startYear,endYear){
    
    let = document.getElementById("fahrenheits").value 

   let Age= startYear-endYear
 

if(Age < 0){
    console.log("Age can not be negative number")
}else if(! startYear, ! endYear) {
    console.log("Please enter your born year")

}
    console.log(Age)
}

calcAge()*/

let array;

 if(localStorage.getItem("age")){
    array=JSON.parse(localStorage.getItem("age"))
 }
 else {
    array.push(v)

    
    // array=[]
 }
 
 function remove(){

    for(let index=0; index < array.length; index++)

    
    array.splice(index,1)
    localStorage.setItem("age", JSON.stringify(array))
    // window.location.reload();
 }

function calcAge () {
    
     let bornYear  = document.getElementById("bornYear").value
    // let birthYear = document.getElementById("birthDate") 
    // let results = document.getElementById("results").value
    
    let age= new Date();
    let currentYear= age.getFullYear();

    let v= (currentYear - bornYear)
    results = document.getElementById("results")
    // results.innerHTML= v
     array.push(v)
    

    localStorage.setItem("age",JSON.stringify(array))

    // birthYear.innerHTML = age
    
    // if(age < 0){
    //     birthYear.innerHTML = ("Age cannot be a negative number");
    if (bornYear== "" || array == null) {
      return  results.innerHTML = ("Please enter born year");}
    else if(bornYear < 0){
      return  results.innerHTML = ("born year  cannot be less than zero");
    } 
    else if(bornYear < 1900) {
       return results.innerHTML = ("born year should not be greater than 1900");
    }
    else if(bornYear > currentYear) {
       return  results.innerHTML = ("born year cannot be more than a current year");
    }
    else if(innerHTML= 0) {
         innerHTML 
     }
     else {
        return results.innerHTML = (v)
     }

     }
    
    
    calcAge()
    
    


