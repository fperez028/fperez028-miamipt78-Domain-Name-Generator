// Domain name generator
// Using multiple arrays
// We want to output every possible combination of the words in the arrays

// Output container in the HTML for DOM Manipulation
let outputDiv = document.getElementById("output");

// 1. Create a set of arrays to make our permutations
let pronoun = ['the','our','my'];
let adj = ['brave','powerful','amazing'];
let noun = ['dog','captain','Lego'];
let tld = ['.com','.net','.org',];

// 2. Nested for loops to iterate through the arrays
for(let i = 0; i < pronoun.length; i++) {
  for(let x = 0; x < adj.length; x++) {
    for(let y = 0; y < noun.length; y++) {
      for(let z = 0; z < tld.length; z++) {
        
        // DOM manipulation
        let domain = `${pronoun[i]}${adj[x]}${noun[y]}${tld[z]}`;

        // Create a new paragraph element
        let p = document.createElement("p");
        p.textContent = domain;

        // Append to the outputDiv
        outputDiv.appendChild(p);
      }
    }
  }
}

// 2. Nested for loops to iterate through the arrays
// The loop but prints to console instead of the DOM
// for(let i = 0; i < pronoun.length; i++) {
//   for(let x = 0; x < adj.length; x++) {
//     for(let y = 0; y < noun.length; y++) {
//       for(let z = 0; z < tld.length; z++) {
//         console.log(`${pronoun[i]}${adj[x]}${noun[y]}${tld[z]}`);
//       }
//     }
//   }
// }