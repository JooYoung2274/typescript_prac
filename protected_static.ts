//protected
//private와 비슷하지만 class를 extends 할 때 사용함
//private는 에러, protected는 사용가능
class User {
  protected x = 10;
}
class NewUser extends User {
  fun() {
    this.x = 20; // 가능. 만약 x가 private 였다면 에러
  }
}

//static
//class로 부터 생성된 오브젝트에 변수나 함수를 추가하는 건 가능하지만
//class자체에 변수나 함수를 추가하는건 불가능함. 이때 static을 사용하면 가능함.
//User2의 자식은(kim) static 붙은 변수 사용 못함.
//statice은 다른 키워드와 동시 사용이 가능함. ex) private static x = 10;
class User2 {
  static x = 10;
  y = 20;
}
let kim = new User2();
// kim.x //에러
User2.x; //가능
