type Animal = string | number | undefined;
let 동물: Animal;

//const 변수의 객체안의 값은 바뀔 수 있음
const 출생지역 = { region: "seoul" };
출생지역.region = "busan";

//만약 바꾸기 싫다면?
// readonly 하면 절대 수정하면 안됨. -> 에러
type Com = {
  readonly name: string;
};
const 노트북: Com = {
  name: "맥북",
};
// 노트북.name = '갤럭시' -> 에러

// 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY;
let position: Position = { x: 10, y: 20 };

// Literal Types
// const 유사품
// 이름10 이라는 변수에는 무조건 'kim'이라는 문자만 들어올 수 있음.
let 이름10: "kim";
let 이름11: "kim" | "JOO";

// 해당 함수타입은 스트링 집어넣고 넘버 리턴
type 함수타입 = (a: string) => number;

// 함수타입 붙이는거는 함수 표현식만 가능함. (function 사용해야함)
const 함수x: 함수타입 = function (a) {
  return 6;
};

type member1 = {
  name: string;
  plusOne: (a: number) => number;
};

const 회원정보1: member1 = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
};

회원정보1.plusOne(1);
