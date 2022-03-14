//type을 이용해서 타입지정하는 방법
type Square = { color: string; width: number };
let 네모: Square = { color: "red", width: 100 };

//name, age 타입 둘다 만족해야함.
// & 기호는 둘다 만족해주세요임. extends의 경우 복사해서 만드는 것임.
//type은 중복선언이 안됨
type Animal = { name: string };
type Cat = { age: number } & Animal;

//interface를 이용해서 타입지정하는 방법
//interface도 & 사용 가능함
//interface를 쓰면 extends로 복사 가능
//interface는 중복선언이 가능함! 중복 선언하면 둘다 합쳐짐 (자동으로 extends가 됨)
interface Square2 {
  color: string;
  width: number;
}
let 네모2: Square2 = { color: "red", width: 100 };

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };
