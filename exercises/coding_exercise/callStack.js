console.log("First log");

function getName(name) {
  console.log(name);
}

function getLastNameAfter2Seconds(lastName) {
  return lastName;
}

Promise.resolve(true).then(function rS() {
  console.log("First Promise");
});

async function getLastName(lastName) {
  const response = await getLastNameAfter2Seconds(lastName);
  console.log(response);
}

setTimeout(() => {
  console.log("1 second");
  setTimeout(() => {
    console.log("1 second + 2second");
  }, 2000);
}, 1000);

setTimeout(() => {
  console.log("0 seconds");
}, 0);

function getNameTwo(name) {
  console.log(name + "2");
}

console.log("Last log");
getName("Saul");
getNameTwo("Saul");
getLastName("Dorantes");
