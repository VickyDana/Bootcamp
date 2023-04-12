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

function calcAge () {
    
    let bornYear  = document.getElementById("bornYear").value 
    
    let age = (2023-bornYear)
    
    if(age < 0){
        alert("Age can not be a negative number");
    }
    else if(!bornYear) {
        alert("Please enter born year");
    } 
     else if(bornYear < 0){
         alert("bornYear can not be less than zero");
     }
    else {
        alert(age)
    }
    }
    calcAge()
    
    


