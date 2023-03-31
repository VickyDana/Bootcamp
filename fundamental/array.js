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



array=[20,311,12,11,13,15,9,4,0,10]
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
    console.log(Odd);


    




    







