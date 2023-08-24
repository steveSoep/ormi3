// 함수
// 함수는 
function 나의시크릿라면레시피() {
  let 라면그릇;
  console.log("물 550ml를 끓인다면과 분말 스프, 후레이크를 같이 넣는다");
  console.log("4분 40초간 더 끓인다 라면그릇 = 맛있는라면");
  return 라면그릇;
}

나의시크릿라면레시피();

function plus2(x) {
  // 로직
  const result = x + 2;
  // console.log(plus2Result); error
  return result
}
const plus2Result = plus2(1337);
console.log(plus2Result);

console.log("----------------------------------------------------");

function 안녕(파라미터) {
  console.log(파라미터);
  console.log('hello-------');
  return 100;
}

let 아규먼트 = 1000;
console.log(아규먼트);
// 안녕(아규먼트);
console.log(안녕(아규먼트) + 안녕(아규먼트));

// 출력하는건 하는 거고 return값은 없으니 undefined로 표현해주는 것

function 안녕() {
  console.log('안녕');
}

안녕();
console.log(String(안녕()));
console.log(String(안녕()) + String(안녕()));



function 함수1(a, b, c) {
  return a + b + c
}

함수1(10, 20, 30)
함수1(10, 20, 50)
console.log(함수1(10, 20, 30))
console.log(함수1(10, 20, 50))
함수1(10, 20, 30, 40)
console.log(함수1(10, 20, 30, 40));
console.log(함수1(10, 20)); // 10 + 20 + undefined = NaN


// let 함수2 = (x, y) => {
//   return x + y;
// }


(() => console.log("화살표함수 바로 실행"))()


// (function () { return x + y })()
// (function (x, y) { return x + y })(2, 3)
// ()=> x + y
// (x, y)=> x + y XXX
// (let = (x, y) => x + y)(3, 4) XXXX

// (파리미터)=>리턴값
// ((x, y) => x + y)(2, 5)

// 물론 함수의 장점중 하나가 코드를 모아서 필요할 때 사용하도록 저장하는 기능도 있지만,
// 때때로 바로 실행이 필요하고 메모리에서 휘발시켜야할 필요도 있습니다.
// 즉시 실행함수는 바로 실행하고 메모리를 절약할 수 있다는 장점이 있습니다!

// 함수는 실행되고 종료되면 메모리에서 사라진다. => 즉시 실행함수를 사용하는 이유?

// 원시타입은 값자체를 저장하고, 객체타입은 값의 주소를 저장한다는 뜻


// 배열
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
arr1[0] = 10;
console.log(arr1);
console.log(arr2);

const arr = [];
console.log(arr);
// arr = [9, 10, 11]
// const arr = [9, 10, 11]
arr[0] = 10;
arr[1] = 11;
arr[2] = 12;
console.log(arr);

const arr3 = [[1, 2], [3, 4], [5, 6]];
console.log(arr3[0][1]);
console.log(arr3[1][0]);
console.log(arr3[2][2]);

arr3.push([7, 8])
console.log(arr3);

// push()와 pop()


// -----------------------------------------------
// shift()와 unshift() : 첫번째 제거, 추가
const myArray = ["사과", "바나나", "수박"];
myArray.shift();
console.log(myArray);
myArray.unshift("망고");
console.log(myArray);
myArray.unshift("수박", "딸기");
console.log(myArray);

// splice()
const arrSp = [1, 2, 3];
arrSp.splice(1, 0, 4); // 1번째 요소에서 => 제거:0개, 추가할 요소는 4
console.log(arrSp);

const arrSp1 = [1, 2, 3, 4];
console.log(arrSp1.splice(1)); // [2, 3, 4]

// slice()
const myArray1 = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArray1.slice(1, 4)); // 1번째 부터 4번째'이전' 까지
console.log(myArray1.slice());
console.log(myArray1.slice(2, 3)); // 2번째 하나만


// sort()
const avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());
console.log(avengers.sort());

const sort = ["a", "bac", "cba", "adf", "bgh", "caa"]
console.log(sort.sort());

const num = [2, 1, 30, 1000, 1245, 9];
console.log(num.sort());


// 객체 (Object)
const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  }
};
console.log(babaYaga);
babaYaga.job = "Killer";
console.log(babaYaga);
delete babaYaga.job;
console.log(babaYaga);

console.log("벨라루스" in babaYaga); // false
console.log("from" in babaYaga); // true

