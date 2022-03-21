//public
//public 사용하면 this.name = name 생략 가능
class User {
  public name: string;

  constructor() {
    this.name = "kim";
  }
}
// 위 아래 같음
class User3 {
  constructor(public name: string) {}
}

//private
//private에 붙은 속성은 class 안에서만 수정 가능함.
class User2 {
  public name: string;
  private familyName: string;

  constructor() {
    this.name = "kim";
    let hello = this.familyName + "d";
  }

  changePrivate() {
    this.familyName = "o";
  }
}

let user22 = new User2();
// user22.familyName = "34"; //에러
user22.changePrivate(); //변경 가능
