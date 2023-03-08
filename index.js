// // Code your solutions in this file

// for (let age = 30;age < 40;age++){


// //     console.log(`I'm age years old. Happy to me!`);
// //     debugger;
// // }.


// console.log(`I'm  ${age} years old.Happy to me!`);



// }



// const  gifts = ["teddy bear","drone","doll"];
// // declaring variables in gifts in list

// function wrapGifts(gifts){
//     for (let i= 0; i < gifts.length; i++){
//      console.log(`Wrapped ${gifts[i]} and added a bow!`);
     
//     }

//     return gifts;
// }
//     wrapGifts(gifts);

//     const writeCards


function writeCards(names, eventName){

    let messages = [];
    for(let i=0; i < names.length; i++){
         console.log(i);

       console.log (messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`));
      debugger;



    }

    return messages;

}

writeCards( ["Ada", "Brendan", "Ali"],"birthday");



function countDown(number){


    // let num = number;

    while(number >= 0){

        console.log(number);
        number --;

    }

    return number;

}

countDown(10);