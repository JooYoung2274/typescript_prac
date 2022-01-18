// 함수 파라미터 타입지정
// 뒤에 붙은건 리턴값 타입지정
function 함수(x) {
    return x * 2;
}
// void 타입
// return 쓰기 싫은 함수에 사용.
function 보이드(x) {
    1 + 1;
}
// 보이드(); 타입지정된 파라미터는 필수로 작성
// 타입스크립트에서 타입지정된 파라미터는 필수로 작성해야함
// 만약 필수로 작성하기 싫다면
// ? 작성
function 함수2(x) {
    return x * 2;
}
함수2();
//위에 물음표랑 아래 undefined랑 같음
// function 함수2(x: number | undefined): number {
//   return x * 2;
// }
function 함수3(x) {
    //   console.log(x + 3); 이렇게 짜면 에러. 유니온 타입은 연산 안됨
    if (typeof x === "number") {
        console.log(x + 1);
    }
    else {
        console.log(x + 1);
    }
}
function 함수4(x) {
    var array = [];
    // array[0] = x; 에러. 유니온 타입때문에 ..
    // else 까지 써주는 게 안전함
    if (typeof x === "number") {
        array[0] = x;
    }
}
// if 말고 속석명 in 오브젝트자료, 인스턴스 instanceof 부모 도 가능
// assertion 문법도 가능함 (narrowing 대체품) -> 거의 안씀. 쓰지마셈.
// 1. as 문법은 타입을 변경하는 문법이 아니라 유니온 타입을 하나의 타입으로 덮어씌어주는 문법
// 2. 어떤 함수에 하나의 타입이 무조건 들어올 것을 알고 있을때 사용함. (에러 캐치가 안됨)
function 함수5(x) {
    var array = [];
    array[0] = x;
}
