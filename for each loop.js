// foreach loop

let jsonStr = '{"name": "Karthi", "age": 25, "city": "Madurai"}';
let jsonObj = JSON.parse(jsonStr);

let array = Object.entries(jsonObj);
array.forEach(([key, value]) => {
  console.log(key + ": " + value);
});