'use strict'
// console : 명령어를 쓸수 있는 창
// const a : 상수형 변수 (빈값에서 한번만 변함)
//  = 값; => 할당을 한다 (대입값)

// 변수 : 변할 수 있는 정보
var a;
let b;

// ||```
// 변수 : 변할 수 있는 정보
// 변수의 자료형은 다양한 데이터를 용도에 맞게 쓰기위해 존재
// ---자료형 : 숫자, 문자열 등과 같이 자료 형태로 사용하는 모든것---
// boolean : 참/거짓 (true/false)
// null : 비어있는 값(존재 X, 할당 O) a = null
// undefined : 값을 할당하지 않고 변수를 선언 ex) let x;
// number, string, symbol, 객체 등등
// --- var let const 비교 ---
// var : 초기화 X, 변수를 선언할때 한번만 사용, 재할당 O,
// 엄격모드 에서는 에러가 발생해서 권장 X
// ex) var a = 10;
// a = 20;
// console.log(a) / 20
// var의 경우 동일한 이름으로 여러번 중복해서 선언이 가능하다,
// 이 경우 유연한게 장점이지만, 코드량이 많아졌을 경우 어느 부분에서
// 문제가 발생하는지 파악하기 힘들기 때문에 권장하지않음

// let : 재할당 가능, 위의 var와같이 변수값을 변경할 수 있다,
// var와 다르게 let은 중복으로 같은이름의 변수사용은 불가하다.
//
// const : 상수(constant)를 뜻하기 때문에 한번만 선언이 가능(재할당 불가능)
// 의도하지않은 값의 변경을 방지할 수 있다. => 버그를 줄일수 있다!
// 코드의 가독성을 높이고 유지보수성을 향상!
// ```||

// 상수 변수를 만드는법
// const c; error
const c = "abc";

// var, let은 계속 수정이 가능하다!
// let a = 3
a = 10
b = 13

// 예약어 사용 XX

// 변수명 한글사용 괜찮

const aa = 500; // 500인 a가 뭘의미하는지 알수없다
const 커피용량 = 500; // 커피 용량이 500(ml)이다 라는 것을 알수있음

let d = 4;
// let d = 8; let은 한번 만든 변수이름과 같은 이름으로 재선언 할수없다.

// Type
console.log(typeof aa); // number
console.log(typeof c); // string

// "" 문자열
console.log('"큰따옴표"');
console.log("\"큰따옴표\"");

console.log('1000'.length);

let 불멸자 = "immortal";
console.log(불멸자[0]);
// 불멸자[0] = "a"; TypeError: Cannot assign to read only property '0' of string 'immortal'
console.log(불멸자);

// f log() { [native code] }

// * 객체의 기능 = 메소드

console.log("--------------------------------------");
// indexOf()
let 한글 = "가나다라마바사아자차카타파하";
console.log(한글.indexOf("다"));
console.log(한글.indexOf("하"));
console.log(한글.indexOf("해")); // -1

// lastindexOf()
let text = "Next level 제껴라 제껴라 제껴라";
console.log(text.lastIndexOf('level')); // 5

console.log(text.lastIndexOf('제껴라')); // 19
console.log(text.lastIndexOf('제껴라', 19));
console.log(text.lastIndexOf('제껴라', 18)); // 15
console.log(text.lastIndexOf('제껴라', 17)); // 15
console.log(text.lastIndexOf('제껴라', 16)); // 15
console.log(text.lastIndexOf('제껴라', 15)); // 15
console.log(text.lastIndexOf('제껴라', 14)); // 11

console.log(text.lastIndexOf('광야')); // -1



// match()
console.log("Naevis 우리 ae, ae들을 불러봐");
console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/));

console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/g));

console.log("Naevis 우리 ae, ae들을 불러봐".match(/[a-zA-Z]\w+/g));
console.log("Naevis 우리 ae, ae들을 불러봐,Naevis 우리 ae, ae들을 불러봐 Naevis 우리 ae, ae들을 불러봐".match(/[a-zA-Z]\w+/g));

// replace()
console.log("제껴라 제껴라 제껴라 huh!".replace("제껴라", "check it out"));
// "check it out 제껴라 제껴라 huh!"
console.log("제껴라 제껴라 제껴라 huh!".replace(/제껴라/g, "check it out"));
// "check it out check it out check it out huh!"
console.log("제자리 제자리 제자리 제자리".replace("제자리", "대체"));
console.log("제자리 제자리 제자리 제자리".replace(/제자리/g, "대체"));

// padStart()
let str = '99'
console.log(str.padStart(5, '0')); // 5자리수 에서 99, 남은 자리는 '0'으로 채움

// ` `
console.log(0.1 + 0.2);
console.log(`${1}`);
console.log(`${"string"}`);
let number = 10;
console.log(`${number}`);

console.log(typeof `${1}`);

const 문자열 = "안녕"
const 백틱사용문자열 = `10 + 3 = ${문자열}`
console.log(문자열);
console.log(백틱사용문자열);

//  산술연산
console.log(.1 * 2 === 0.2); // true
console.log(10 / 3); // 몫
console.log(10 % 3); // 나머지
console.log(`10 % 3 = ${10 % 3} (나머지)`);

console.log(+'4');
console.log(-'4');
console.log(5 + '4'); // 문자
console.log(5 - '4'); // 숫자
console.log(15 - '4'); // 숫자

const num = '10'
console.log(num + 10);
console.log(+num + 10);
console.log(-num + 10);


// 증감연산자
let num1 = 1;
console.log(++num1); // 2
console.log(num1++); // 2
console.log(num1); // 3
console.log(++num1); // 4
console.log(num1--); // 4
console.log(--num1); // 2

// 논리자료형(Boolean)
let x = 5;
let y = 10;
let z = '5';

console.log(x > y); // false
console.log(x < y); // true
console.log(x == z); // true
console.log(x === z); // false
console.log(x === +z); // true
console.log(y > z); // true

console.log(1 / 0);

// document.write(3e10);

console.log("-----------------------------------");







