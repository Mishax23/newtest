dollar= prompt("Внесите сумму в долорах");
kurs= dollar * 91;
alert("Перевод составил:" + kurs + "rub");



const text = "Hello";
const result1 = text. split(''). reverse(). join('');
console.log(result1);

function getRandomInt(max) {
  return Math.floor(Math.random() * 100);
}
console.log(getRandomInt(6));


var a= true;
var b= false;
console.log(a||b);
/*if  else*/

var bankBalance= 5000;
var price= 19000;
if ( price <= bankBalance ) {
  console.log("да,все хорошо!")
}
else if (price < 10000) {
  console.log("пополните баланс!")
}
else {
  console.log ('нам не надо')
}

//Масивы

arrQ = ["Black", 4, "Pink"];
console.log(arrQ)
console.log(typeof arrQ[0]);
console.log(typeof arrQ[1]);
console.log(typeof arrQ[2]);

/*Циклф*/


for (let i = 0; i < 10; i = i + 1) {

  console.log(i)

}
let i = 0;
while (i < 10) {
     i = i + 1
     console.log(i)
}
let i1 = 0;
do {
    i1 = i1 + 1
    console.log(i1)
} while (i1 < 10)


const arr = [1, 2, 4]

for (let i = 0; i < arr.length; i++ ) {
  console.log(arr[i])
}



let mapWar = new Map();
mapWar.set("key", "box");
mapWar.set(13, "box2");
mapWar.set(true, 948);
console.log(mapWar.keys())
console.log(mapWar.values())

