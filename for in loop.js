// Using For...In Loop
let jsonStr = '{"name": "Karthi", "age": 25, "city": "Madurai"}';
let jsonObj = JSON.parse(jsonStr);


for (let key in jsonObj) {
  if (jsonObj.hasOwnProperty(key)) {
    console.log(key + ": " + jsonObj[key]);
  }
}