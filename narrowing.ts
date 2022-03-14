//&& 연산자로 narrowing 하는 방법
//만약 a가 undefined라면 둘다 참이 아니라서 if문이 실행 안됨.
function 함수(a: string | undefined) {
  if (a && typeof a === "string") {
    console.log("&& narrowing 방법!");
  }
}

//in 으로 narrowing 하는 방법
type Fish = { swim: string };
type Bird = { fly: string };

function 함수2(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

//instanceof 로 narrowing 하는 방법
//오브젝트 instanceof 부모class
let date = new Date();
if (date instanceof Date) {
  console.log(date);
}

//in못씀. 쓰려면 배타적인 속성을 찾아야함. (Car만 있거나, Bike에만 있는 속성)
//그냥 literal type 넣어서 구별할 수 있음. 숫자든 문자든
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수3(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log(x);
  }
}
