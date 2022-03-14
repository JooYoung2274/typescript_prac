let 이름: string = "kim";
let 배열: string[] = ["1", "2"];
//?는 들어올수도있고 아닐수도있고
let 객체: { name?: string } = { name: "1" };
let 문자또는숫자: string | number = "kim";

type SN = string | number;
let 숫자또는문자: SN = "1";

//파라미터로 number, return값으로 number를 줘라
function 함수(x: number): number {
  return x * 2;
}
//튜플타입 지정
//튜플타입 지정
type Member = [number, boolean];
let john: Member = [123, true];

//문자타입의 키값은 전부 문자타입의 밸류를 갖게 지정
type Member2 = {
  [ket: string]: string;
};
let john2: Member2 = { name: "kim" };

//class 에서 타입선언
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
