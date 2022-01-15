var 이름 = "kim";
var 배열 = ["1", "2"];
//?는 들어올수도있고 아닐수도있고
var 객체 = { name: "1" };
var 문자또는숫자 = "kim";
var 숫자또는문자 = "1";
//파라미터로 number, return값으로 number를 줘라
function 함수(x) {
    return x * 2;
}
var john = [123, null];
var john2 = { name: "kim" };
//class 에서 타입선언
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
