// <T> 의 형태로 씀. T는 관습적으로 쓰고 이후 알파벳 순서대로 씀.
function 함수<T>(x: T[]): T {
  return x[0];
}
let a = 함수<number>([4, 2]);
let b = 함수<string>(["kim", "park"]);

// T가 number말고 다른것도 올 수 있어서 사칙연산이 안됨.
function 함수2<T>(x: T) {
  return x - 1;
}
let c = 함수2<number>(100);

// 여기서 쓰는 extends는 interface와 조금 다름.
// number와 비슷한 속성을 가지고 있는지 if 문으로 체크하는 문법이라고 생각하면 됨.
function 함수3<T extends number>(x: T) {
  return x - 1;
}
let d = 함수3<number>(100); //잘됩니다
