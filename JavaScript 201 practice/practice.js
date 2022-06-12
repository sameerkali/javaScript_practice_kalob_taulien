"use strict" 

// callBack

// console.log("Wait for 2 sec..")
// setTimeout(function(){
//     console.log("hay buddy light weight");
// }, 2000)


// setInterval(function(){
//     console.log("scanning......")
// }, 2000)


// let count = 0;
// let interval = setInterval(function(){
//     console.log("scanning......")
//     count++;

//     if(count === 3){
//         clearInterval(interval)
//         console.log("scanning compleat")
//     }
// },2000)




                        // ==========unlimited=======

// while (true){
//    let name1 = prompt('What is your good name ')
//    let number = prompt(`Hello ${name1} Guess the number between 1 to 5 ( all the best 😜)`);
//     number = Number(number);
//     let randomNumber = Math.ceil(Math.random() * 15 )  ;
//     if(number === randomNumber){
//         console.log("ooh YOU WIN !!!! 🎁")
//         // alert("ooh YOU WIN !!!! 🎁")
//         prompt("ooh YOU WIN !!!! 🎁")
//         break;
//     }
//     else{
//         console.log(`You guess ${number} but the actual number was ${randomNumber}`);
//     }
// }



                    // ==========limited=======
// for(let i = 0 ; i<5 ; i++ ){
//     let name1 = prompt('What is your good name ')
//     let number = prompt(`Hello ${name1} Guess the number between 1 to 5 ( all the best 😜)`);
//      number = Number(number);
//      let randomNumber = Math.ceil(Math.random() * 15 )  ;
//      if(number === randomNumber){
//          console.log("ooh YOU WIN !!!! 🎁")
//          // alert("ooh YOU WIN !!!! 🎁")
//          prompt("ooh YOU WIN !!!! 🎁")
//          break;
//      }
//      else{
//          console.log(`You guess ${number} but the actual number was ${randomNumber}`);
//      }
//  }




// const demo = ()=> console.log("1")
// const demo2 =  ()=> setTimeout(()=> console.log("2"));
// const demo3 = ()=> console.log("3")

// demo();
// demo2();
// demo3();







// const cat = function (catName){
//     console.log(`hay cat whats your name .. !! , yo my name is ${catName}`)
// }
//  cat("lola")

//  function cathoon (catName){
//     console.log(`hay cat whats your name .. !! , yo my name is ${catName}`)
// }
//  cathoon("hola")



// const cat =  (catName) => {
//         console.log(`hay cat whats your name .. !! , yo my name is ${catName}`)
//     }
//      cat("lola")



// class myClassName {
//     setName(name){
//         this.name = name
//     }
//     speak(){
//         console.log(`woof woof says the dog named ${this.name}`)
//     }
// }

// const things = new myClassName();
// things.setName("dogo mcMacmen");
// things.speak()


// switch (prompt("What is the weather like?")) {
//     case "rainy":
//       console.log("Remember to bring an umbrella.");
//       break;
//     case "sunny":
//       console.log("Dress lightly.");
//     case "cloudy":
//       console.log("Go outside.");
//       break;
//     default:
//       console.log("Unknown weather type!");
//       break;
//   }


















































    const name123 = document.querySelector('#name');
    const height = document.querySelector('#height');
    const mass = document.querySelector('#mass');

    const button = document.querySelector('.getRandomCharacator');
    button.addEventListener('click', (s) =>{
        s.preventDefault()
            name123.innerHTML = '<em>loading..</em>'
            height.innerHTML = '<em>loading..</em>'
            mass.innerHTML = '<em>loading..</em>'
        console.log("clicked")
        const randomCharactor = Math.ceil(Math.random()*83);
        fetch(`https://swapi.dev/api/people/${randomCharactor}/`)   
        // fetch(`https://akabab.github.io/starwars-api/api/all.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            name123.innerHTML = data['name']
            height.innerHTML = data['height']
            mass.innerHTML = data['mass']
        })
    })





































