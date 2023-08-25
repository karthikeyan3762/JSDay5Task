// for loop
let jsonStr = '{"name": "Karthi", "age": 25, "city": "Madurai"}';
let jsonObj = JSON.parse(jsonStr);


let array = Object.entries(jsonObj);

for (let i = 0; i < array.length; i++) {
  let key = array[i][0];
  let value = array[i][1];
  console.log(key + ": " + value);
}