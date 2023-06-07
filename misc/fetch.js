// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(resp => {
//     console.log(resp);
//     return resp.json();

//   }).then(json => {
//     console.log(json);
//     return json;
//   });

function greet() {
  console.log("Hola");
}

async function showUsers() {

  console.log("Fetch users");
  let response = await fetch('https://jsonplaceholder.typicode.com/users');

  console.log("Convert response to JSON");
  let users = await response.json();

  return new Promise(function (resolve) {
    setTimeout(resolve, 3000, greet());
  });

}

showUsers();


console.log('outside setTimeout1');
setTimeout(() => {
  console.log('inside parent1 setTimeout1');
  setTimeout(() => {
    console.log('inside parent2 setTimeout1');
    setTimeout(() => {
      console.log('inside child setTimeout');
    }, 3000);
    console.log('inside parent2 setTimeout2');
  }, 2000);
  console.log('inside parent1 setTimeout2');
}, 1000);
console.log('outside setTimeout2');