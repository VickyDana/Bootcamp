//  function calcTemp(fahrenheits) {
//     let celsius;
    
//     celsius= (fahrenheits -32) * 5/9
//    return  celsius 

 //}
//  if(calcTemp  <  16){
//     console.log("cold")
// }else if(calcTemp = 16-21){
//     console.log("warm")
// }else(calcTemp > 21)
//     console.log("hot")
    
    
 //console.log(calcTemp(15))

// function convertTemp(fahrenheits) {
    
//         let celsius = (fahrenheits-32) * 5/9;
    

//         if (celsius < 16) {
//             console.log("cold");
//         }
//         else if(celsius  <= 16 && celsius < 21 ){
//             console.log("warm")
//         }
//         else if(celsius > 21) {
//             console.log("hot")
//         }
        
//    }
//     convertTemp()

/* function convertTemp(fahrenheits){
    let celsius= (fahrenheits-32) * 5/9;

    if (celsius < 16) {
        console.log("Its cold, wear Jacket");
    }
    else if(celsius <= 16 && celsius < 21) {
        console.log("Its warm, wear T-shirt & Jeans");
    }
    else if(celsius > 21) {
        console.log("Its hot, wear shorts");
    }
    
}
    convertTemp(15)*/

    function convertTemp() {

        let fahrenheits = document.getElementById("fahrenheits").value 
        let celsius = (fahrenheits-32) * 5/9;

        
        if (celsius < 273,15){
            alert("It cannot be cold to this level" +" "+ celsius)
        }
        else if   ( celsius < 16) {
        
        alert( "Its cold, wear Jacket" +" "+ celsius)
        }
        else if (celsius > 16 &&  celsius <= 21) {
             alert ("Its warm, wear T-shirt & Jeans" +" "+ celsius)
        }
        else {
             alert ("Its hot, wear shorts" +" "+ celsius);
        }
        
      }

      
        



 
    

        






