// for of loop

let jsonStr = '{"name": "Karthi", "age": 25, "city": "Madurai"}';
let jsonObj = JSON.parse(jsonStr);


const array = Object.entries(jsonObj);
for (let [key, value] of array) {
  console.log(key + ": " + value);
}

