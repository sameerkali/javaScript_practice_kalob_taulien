// // Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
// const name = document.getElementById(""); // Fill this in 
// const age = document.getElementById(""); // Fill this in.
// const dogYears = document.getElementById(""); // Fill this in. 

// // Step 2. Set the values.
// // Example: myNode.innerText = "something"
// // Set `name` and `age` in here


// function showDogYears(age) {
//   // Step 3. Cast `age` as a number
//   dogYears.innerText = age * 7;
//   return age * 7
// }

// // Step 4. Set the parameter of showDogyears()
// dogYears.innerText = showDogYears()

// // Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
// const fakeInputs = document.querySelectorAll(".fake-input")
// fakeInputs.forEach(node => {
//   node.classList.add()
// })

// =================================== lets start ======================================


// console.log("its working fine");

const name = document.getElementById("name"); 
 const age = document.getElementById("age"); 
 const dogYears = document.getElementById("dogyears"); 



 name.innerText = "sameer"
 age.innerHTML = 20
 dogYears.innerText = dogage(20)
//  console.log(dogage())
//  dogYears.innerText = '5 years'

function dogage (age){
    dogage = 7*age;
    // dogYears.innerText(age*7);
    return dogage   ;
    // dogYears.innerText = age * 7;
    //  return age * 7
}

const fake = document.querySelectorAll(".fake-input");
fake.forEach(node=>{
    node.classList.add("real-input");
    node.classList.remove("fake-input");
});

