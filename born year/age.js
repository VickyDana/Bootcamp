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
    let birthDate = document.getElementById("birthDate") 
    
    let age = (2023-bornYear)

    birthDate.innerHTML = age
    
    if(age < 0){
        birthDate.innerHTML = ("Age cannot be a negative number");
    }
    else if(!bornYear) {
        birthDate.innerHTML = ("Please enter born year");
    } 
     else if(bornYear < 0){
         birthDate.innerHTML = ("bornYear cannot be less than zero");
     }
    else {
        birthDate.innerHTML = (age)
    }
    }
    calcAge()
    
    


