// // 1
let data = [
  ["The", "red", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

function groupeWords(array) {
  return array.reduce((aggr, val) => {
    aggr.push(val.join(" "));
    return aggr;
  }, []);
}

// Result
// [
//   "The red horse",
//   "Plane over the ocean",
//   "Chocolate ice cream is awesome",
//   "this is a long sentence",
// ];
//console.log(groupeWords(data));

//2
function Calculator() {
  // your code goes here
  return function (num1, num2, sign) {
    switch (sign) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;
      case "/":
        return num1 / num2;
      case "*":
        return num1 * num2;
    }
  };
}

let calc = new Calculator();
//console.log(calc(1, 2, "+")); //=> 3;
//console.log(calc(3, 4, "-")); //=> -1

//3
let d = [1, 2, 3, "a", "a", "f", 3, 4, 2, "d", "d"];
function removeDups(arr) {
  //you code here
  let obj = arr.reduce((aggr, val) => {
    if (!aggr[val]) {
      aggr[val] = 1;
    } else {
      aggr[val]++;
    }
    return aggr;
  }, {});
  return Object.keys(obj);
}
//result => [1,2,3,’a’, ‘f’, 4, ‘d’];
//console.log(removeDups(d));

//4
let arr = [
  { name: "Alice", job: "Data Analyst", country: "AU" },
  { name: "Bob", job: "Pilot", country: "US" },
  { name: "Lewis", job: "Pilot", country: "US" },
  { name: "Karen", job: "Software Eng", country: "CA" },
  { name: "Jona", job: "Painter", country: "CA" },
  { name: "Jeremy", job: "Artist", country: "SP" },
];

function groupe(arr, prop) {
  //code here
  return arr.reduce((aggr, val) => {
    if (!aggr[val[prop]]) {
      aggr[val[prop]] = [val];
    } else {
      aggr[val[prop]].push(val);
    }
    return aggr;
  }, {});
}

//result => {
//       AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
//       US: [{name: 'Bob', job: 'Pilot', country: 'US'},
//     {name: 'Lewis', job: 'Pilot', country: 'US'}],
//   ……
//   }

//console.log(groupe(arr, "country"));

//5
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole
// string(not individual words), the input
// string becomes
// Much.very.program.this.like.i
function rev(str) {
  let result = "";
  let arr = str.split(".");
  for (let i = arr.length - 1; i >= 0; i--) {
    result += arr[i] + ".";
  }
  return result;
}
//console.log(rev("i.like.this.program.very.much"));
