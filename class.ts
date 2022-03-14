class Person {
  name: string; //미리 지정해줘야 사용 가능함. 타입지정은 생략 가능.
  constructor(a: string) {
    this.name = a;
  }

  //prototype은 여기서 선언
  함수(a: string) {
    console.log(a);
  }
}

let 사람1 = new Person("kim");
