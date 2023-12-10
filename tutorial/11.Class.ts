class Playerss {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ){}
}

 // TypeScript에서 객체 지향 프로그래밍을 위해 class를 선언하여 constructor 함수를 만드는 방법
 // 이런식으로 하면 this.firstName <= 이런식으로 안해도 됨
 // private나 public property를 만들 수 있음
 // JS로 컴파일되면 private 키워드는 사라짐 TS가 보호하기 위해서만 사용

 const sangmirrring = new Players("sangmiiii", "rrring", "상미링");

 sangmirrring.firstName;
 sangmirrring.nickname;

// private는 클래스 내부에서만 엑세스가 가능하고 public은 어디서든 접근 가능


abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ){}
}

class Players extends User { 

}

// 추상 클래스란? 다른 클래스가 상속받을 수 있는 클래스
// 인스턴스 : 클래스 기반으로 생성된 객체를 뜻하며 클래스는 객체를 만들기 위한 템플릿, 인스턴스는 해당 템플릿을 가지고 실제로 생성된 객체 
// 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수 없음!

const me = new Players ("sang", "min", "sangmirrring")

// 추상 클래스는 오직 다른곳에서 상속 받을수만 있는 클래스


me.firstName
me.nickname

// 여전히 nickname에 접근이 가능하다
// 추상 클래스 안의 메소드 (abstract method, 추상 메소드)

abstract class User2 {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
    private getFullName(){
        return `${this.firstName} ${this.lastName}`     // <= 이 부분이 메소드의 구현 부분
    }
}

class Players2 extends User2 { 

}

const me2 = new Players2("sang", "min","sangmirrrrring")
me2.getFullName() // 위 코드에서 함수앞에 private를 지워주면 메소드 사용이 가능하다
// private, public이 property뿐 아니라 method에서도 작동한다


// 추상 메소드를 만들려면, 메소드를 클래스 안에서 구현하지 않으면 됨
// 메소드 return 부분을 작성하지 않기
// 추상 메소드를 만들려면 call signature만 적어준다


abstract class User3 {
    constructor(
        private name: string,
        private age: number,
        private hobby: string,
    ) {}
    abstract gethobby(): void
}

class Player4 extends User3{
    gethobby() {
        console.log(this.hobby)
    }
}

// 추상 메소드는 추상 클래스를 상속받는 모든 것들이 구현을 해야하는 메소드를 의미한다
// 추상 메소드가 있는 경우, 추상 클래스를 상속받는 클래스에서 추상 메소드를 구현 해주어야 함
// 위 코드에서 private 키워드를 이용해서 hobby에 접근할수가 없다
// 때문에 protected 키워드를 사용할 수 있다


abstract class User4 {
    constructor(
        protected name: string,
        private age: number,
        protected hobby: string,
    ) {}
    abstract gethobby(): void
}

class Human extends User4 {
    gethobby()  {
        console.log(this.hobby)
    }
}

// 위와 같이 private property 들은 인스턴스 밖에서 접근 안되고 자식클래스에서도 접근이 안되지만
// protected는 가능하다

const me3 = new Human ("상민", 28, "클라이밍");

me3.hobby = "헬스"

// protected로 인스턴스 바깥에서 값을 수정할 수 없다
// 만약 필드가 외부로부터는 보호되지만, 다른 자식 클래스에서는 사용되기를 원한다면, private을 사용하면 안됨 

me3.gethobby()


type Words = { 
    [key:string] : string        // key에는 어떤 키워드가 들어가도 상관없다 
}
// object의 Type을 선언 해야할 때 쓸 수 있다  
// object는 제한된 양의 property 혹은 key를 가지는 타입을 정의해 주는 방법 

class Dict {
    private words: Words 
    constructor(){          // 생성자를 이용해서 수동으로 초기화
        this.words = {}         
    }
    add(word:Word){             // 클래스를 타입처럼 사용했다 (이해안됨)
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
    static hello() {            // 스테틱 정확허게 이해 못하겠습니다
         return "hello"
    }
} 

// constructor(생성자)를 이용하지 않았다
// constructor를 수동으로 초기화했다(?)

class Word {            // Word는 클래스이고 위쪽에서 타입처럼 사용됐다
    constructor(
        public readonly term: string,           // readonly는 읽기 전용이다
        public readonly def: string,
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi")

kimchi.term = 'xxx' // 읽기전용으로 수정을 막을 수 있다 
Dict.hello()


type Player8<E> = {
    nickname : string,
    age:E
}

const sangminPlayer : Player8<number> = {
    nickname: "sangmirrring",
    age: 30
}

type Food = string;

const kimchi2 : Food = "delicious"
type Health = number
type Friends = Array<string>





