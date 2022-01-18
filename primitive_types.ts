let 이름: string = "kim";
let 나이: number = 50;
let 문자배열: string[] = ["kim", "seon"];
let 숫자배열: number[] = [123, 456];
let 문자객체: { joo: string; seon: string } = { joo: "kim", seon: "seon" };

// 그런데 사실 엄청난 반전이 있음.
// 바로 타입스크립트는 타입지정을 자동으로 해줌
let 회원들 = "park";
// 회원들 = 123; 이렇게 쓰면 오류!!

//union type
let 문자또는숫자: number | string = 123; //123 or "123"
let 문자또는숫자배열: (number | string)[] = [1, "2", 3]; // ()으로 안감싸면 그냥 숫자와 문자배열이 가능하다는 뜻
let 문자또는숫자객체: { a: number | string } = { a: "123" };

//any type -> 타입스크립트를 쓰는 의미가 있나?
let 모든타입: any = 123; //"123" or true .. 모든 타입 가능

// unknown 다 넣을 수 있음
// any type 보다 unknown이 좋은 이유는 재할당 할 때 오류를 잡아줌
let 언노운: unknown;
언노운 = 123;
언노운 = "123";
// let 언노운2 :number = 언노운 //언노운의 마지막은 스트링이었는데 타입이 숫자인 언노운2에 할당하면 오류

let 덧셈: string | number;
// 덧셈 + 1; 오류남, 유니온 타입에는 연산 안됨. (string + 1, number +1은 가능)
