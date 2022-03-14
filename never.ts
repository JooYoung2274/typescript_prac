//never type 조건 (함수가 끝나지 않아야함)
// 거의 쓸데 없음. void 쓰면 됨.
// 1. return 하면 안됨.
// 2. 엔드포인트가 없어야 함.

// 첫번째 방법 : 에러 발생
function 함수(): never {
  throw new Error();
}
// 두번째 방법 : while
function 함수2(): never {
  while (true) {}
}
