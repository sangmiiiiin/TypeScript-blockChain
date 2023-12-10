// 인터페이스는 우리에게 익숙한 타입과 비슷하지만, 두 가지 부분에서 다른데

// 타입은 객체의 모양을 알려주거나 데이터 타입을 알려줄 수 있음
// 인터페이스도 오브젝트의 모양을 설명함



type Team = "red" | "blue" | "yellow" // 다음과 같이 concrete 타입이 아닌 특정 값을 쓸수도 있다

type Healths = 1 | 5 | 10

type playerssss = {
    nick: string,
    power: number,
    dex?: number
}

interface Playersss  {          // 인터페이스의 용도는 오직 한 가지임 바로 오브젝트 모양을 특정해주기 위함
    nickname: string,           // React.js를 이용해 작업할 때 많이 사용함
    team: Team,                 // 타입스크립트에게 오브젝트 모양을 알려주는 방법은 두 가지가 있음
    health: Healths             // 첫번째는 타입, 두번째는 인터페이스
}                               // 차이점은 type 키워드는 interface 키워드에 비해 활용할 수 있는게 많다

const sanmirrrrrring : Playersss = {
    nickname: "sssangmin",
    team: "yellow",
    health: 10
}   

const jieurrring : playerssss = {
    nick : "jieun",
    power: 99
}

interface Hello = string        // interface는 오로지 오브젝트의 모양을 타입스크립트에게 설명해 주기 위해서만 사용되는 키워드임

interface User333 {
    readonly name: string
}

interface Playered extends User333 {        // interface는 class 처럼 상속이 가능하고 문법 구조가 객체지향 프로그래밍과 매우 유사하다

}

const sangminss : Playered = {
    name: "sangmins"
}

sangminss.name = "sangming" // readonly 때문에 수정이 안된다