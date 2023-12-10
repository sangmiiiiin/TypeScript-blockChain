// interface에 있는 내용을 상속할때 자동으로 TS가 합쳐준다

interface UserMe {
    name: string
}

interface UserMe {
    age: number
}

interface UserMe {
    extraInfo: {
        favFood: string
    }
}

const me4 : UserMe = {
    extraInfo: {
        favFood: "kimchi"
    },
    name: "sangmin",
    age: 20

}

// 위와 같이 각자 다른 interface 3개를 자동으로 합쳐줌


abstract class Users {          // 추상 클래스는 인스턴스를 만드는걸 허용하지 않음
    constructor(
        protected firstName: string,
        protected lastName: string,
    ) {}
    abstract sayHi(name:string): string
    abstract fullName():string
}
class charactors extends Users {    // 상속받는 클래스가 어떻게 동작해야할지 일러주기 위해서 추상클래스를 사용한다
    fullName(){
        return `${this.firstName} ${this.lastName}` // 만약 private를 썼다면 상속받은 클래스에서 firstName과 lastName에 접근 불가능
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

// 추상 클래스는 이걸 상속받는 다른 클래스가 가질 property와 메서드를 지정하도록 해준다
// 만약 Users 클래스를 상속한다면, sayHi랑 fullName을 구현해야 하고
// protected는 추상 클래스로부터 상속받은 클래스들이 property에 접근하도록 해준다
// 추상 클래스를 만들면 JS에서는 일반적인 클래스로 컴파일링 된다
// 그러면 왜 추상클래스를 만드는가? => 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용
// 이때 인터페이스를 사용, 인터페이스는 컴파일하면 JS로 바뀌지 않고 사라짐
// 인터페이스는 constructor나 abstract같은 키워드 사용하지 않음
// 오브젝트나 클래스의 모양을 묘사하도록 해줌

 
interface Userss {
    firstName: string,
    lastName: string,
    sayHi(name:string): string,
    fullName():string
}
interface Human01 {
    health: number
}

class players01 implements Userss, Human01 { // extends (상속) 대신 implements를 사용 (JS에선 사용하지 않는 단어임)
    constructor(
        public firstName: string,  // 인터페이스를 상속할 때에는 property를 private로 만들지 못한다
        public lastName: string,
        public health: number
    ){

    }
    fullName(){
        return `${this.firstName} ${this.lastName}` // 만약 private를 썼다면 상속받은 클래스에서 firstName과 lastName에 접근 불가능
    }
    sayHi(name: string) {
        return `Hello ${name}. My name is ${this.fullName()}`
    }

}

// 추상 클래스처럼 원하는 property나 메서드를 강제하면서 JS에서 컴파일 되지않는 interface를 상속하기 위해 implements를 사용
// interface는 TS에만 있고 JS로 컴파일 되지 않으면서 오브젝트나 class의 property를 강제 할 수 있다
// 그냥 추상 클래스는 JS에서 클래스로 바뀐다
// 때문에 인터페이스를 상속한다 (파일사이즈를 줄이고 싶다면, 이런걸 원하게 될것이다)
// 인터페이스 상속의 문제점 중 하나는 private property 들을 사용하지 못한다는 것과
// 추상클래스에서 constructor가 해줬던일을 인터페이스에선 해주지 않음(? 생성자의 역할이 몬데)
// 원한다면 하나이상의 인터페이스를 동시에 상속이 가능하다

const user = new players01("sangmin", "Lyu", 10);
console.log(user);


