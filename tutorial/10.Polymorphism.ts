// Polymorphism(다형성)이란 무엇인가?

// 배열을 인자로 받아 각 배얄의 요소를 콘솔로 찍어내는 함수
// 숫자와 불리언 타입을 지정해주고 문자열로 이뤄진 배열을 받고 싶다면 또 type에 문자열을 받는 함수를 추가해야할까?
// NO, 더 나은 방법으로 TS와 소통할 수 있다
// concrete type = number, string, boolean, void, unknown 등
// 여기서 TS에게 generic 타입을 받게 할거임 => generic이란 타입의 placeholder 같은것
// concrete type을 사용하는것 대신에 타입스크립트로 placeholder를 작성할 수 있고 그게 뭔지 추론해서 함수 사용 가능
 


 
type SuperPrint = {
    (arr: number[]) :void
    (arr: boolean[]) :void
    (arr: string[]) :void
    (arr: (number|boolean)[]) :void     // 숫자 또는 문자로 이루어진 매개변수를 받게한다
}

// 숫자, 불리언, 문자열의 배열을 받는 3개의 call signatures가 있음
   

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(["a", "b", "c"])
superPrint([1, 2, true, false]) // 17번째 줄 처럼 코드를 작성해 타입을 선언
superPrint([1, 2, true, false, "3"])    // generic을 사용해 에러를 피할 수 있음


// 우리는 call signatures 를 사용할 때 여기 들어올 확실한 타입을 모를때 generic을 사용한다
// generic을 사용하는 방법은, 먼저 TS에 generic을 사용하고 싶다고 알려줘야 함
type SuperPrint2 = {
    <TypePlaceholder>(arr: number[]): void  // 꺽쇠안에 원하는 이름을 넣어주면 되고 대부분 T나 V를 사용한다
}
// 이것이 TS에게 이 call signature가 제네릭을 받는다는걸 알려주는 방법

type SuperPrint3 = {
    <TypePlaceholder>(arr: TypePlaceholder[]): void  // 꺽쇠안에 원하는 이름을 넣어주면 되고 대부분 T나 V를 사용한다
}

const superPrint3 : SuperPrint3 = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint3([1,2,3,4])
superPrint3(["1",2,3,true])

// generic을 사용하니 superPrint에 어떤 데이터 타입을 집어 넣어도 TS가 추론하여 알게 된다
// 함수위에 마우스를 올려보면 generic을 이용하여 기본적으로 유추한 타입을 call signature를 보여준다

type SuperPrint4 = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

// 함수가 placeholder의 배열을 받고 placeholder 중 하나를 리턴하도록 했다


const superPrint4: SuperPrint4 = (arr) => arr[0]

const one = superPrint4([1, 2, 3, 4])
const two = superPrint4([true, false, true])
const three = superPrint4(["a", "b", "c"])
const four = superPrint4([1, 2, true, false]) 
const five = superPrint4([1, 2, true, false, "3"])   

// 위의 코드는 함수의 call signature를 입력할 때 placeholder를 사용한것
// 이게 바로 다형성(polymorphism)이다!

type SuperPrint5 = {
    <T>(arr: T[]): T 
}

// generic을 사용할 때 위 처럼 T를 사용하는 것을 많이 보게 될거임
// TS에게 타입을 유추하도록 알려준것

type SuperPrint6 = <T>(arr: T[]) => T


type SuperPrint7 = <T, M>(a: T[], b:M) => T
const superPrint7: SuperPrint7 = (a) => a[0]
// 타입스크립트는 제네릭이 처음 사용되는 지점을 기반으로 이 타입이 무엇인지 알게 됨
const one1 = superPrint7([1, 2, 3, 4], "x")  // TS는 두번째 매개변수가 함수에서 제네릭이라는걸 알게됨


// any와는 다름 이건 우리가 하는 요청에 따라 call signature를 생성한다는 뜻

const two2 = superPrint7([1, 2, true, false, "hello"], [])
