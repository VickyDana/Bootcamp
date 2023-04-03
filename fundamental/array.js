 /*array= [2,5,7,8,6,9,1,3,4]
    array.pop(4);
    console.log(array)

array= [2,5,7,8,6,1,3]
array.push(23)
console.log(array)

array= [2,5,7,8,6,1,3,23]
array.shift(2)
console.log(array)

array= [5,7,8,6,1,3,23]
array.unshift(16)
console.log(array)*/



/*array=[20,311,12,11,13,15,9,4,0,10]
let Even = new Array();
let Odd =new Array();

for(let i=0; i < array.length;i++){
    if(array [i] % 2 ===0) {
        Even.push(array[i]);
    }else {
        Odd.push(array[i]);
    }

    let Object={
        Even,
        Odd,

    }
}

    console.log(Even);
    console.log(Odd);*/

    /*let numbers= [-3,-100,10,4,6,7,20,1]

    let letters = ["d","a","e","g","c","f","b","h"];
   numbers.sort((a,b)=> a-b)
    console.log(numbers)*/


   /*let letters = ["d","a","e","g","c","f","b","h"];
   letters.sort()
    console.log(letters)*/

    /*let Name= "uviwe"
    let reversedName= "ewivu"
    console.log(Name)*/

     /*function reversedmyName(myName){
     let newName= "";

     for(let i= myName; i >= 0;i--){
         newName += myName [i];
     }
    return newName
    }
     console.log(reversedmyName("uviwe"))*/


/*function strReversed (text){
    let reversed ="";
    for(let i=0; i < text.length; i++){

    reversed=text[i] + reversed;
}
console.log(reversed);

}

strReversed("I am testing")
strReversed()*/

//Parameters

/*function addThreeParameters (hourlyrate, hours, days){
    let salary = hourlyrate*hours* days
    console.log(salary)
}
addThreeParameters (26,8,25)*/

    
/*function addThreeParameters (hourlyrate,hours,days,pci=1){
    return hourlyrate*hours*days*pci
}
console.log(addThreeParameters (26,8))*/

/*function emailGen(fname="Vicky",Lname="Dana") {
    //return fname+"."+ Lname+ "@gsb.co.za"
    let email=fname + "." + Lname + "@gsb.co.za"
    return email.toUpperCase()
}
console.log(emailGen())
console.log(emailGen("uviwe dana"))*/

 //Spread-Operator

let num1=[1,3,5,7]
let num2=[0,2,4,6]
let num3=[num1 ,num2]
let num4= num1.concat(num2)

console.log("This is num3", num3)
console.log("This is num4", num4)

    








   
    
    
        
    
    


    




    







