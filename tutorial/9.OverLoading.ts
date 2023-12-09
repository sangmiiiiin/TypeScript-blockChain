// call signature 정의 : 우리가 TS에게 이 함수가 어떻게 호출되는지 설명해주는 부분
// 매개변수나 리턴값의 타입

// 오버로딩이란 무엇인가?
// 함수가 여러개의 call signatures를 가지고 있을 때 오버로딩(overLoading)을 발생시킨다

type Names = {
    (a: number, b: number) : number
    (a: number, b: string) : number
}

const plus4: Names = (a, b) => {
    if(typeof b === "string") return a
    return a + b
}

// 조건문을 이용해서 b의 데이터타입이 문자열이면 a를 반환하게 하고 
// a와 b를 더한 값을 리턴한다
// 매우 좋지 않은 예시다

// 오버로딩은 여러 call signatures가 있는 함수일 뿐이다

type Config = {
    path: string,
    state: object   
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if(typeof config === "string") { console.log(config) }
    else {
    console.log(config.path)
}
}

type Add = {
    (a: number, b:number) : number
    (a: number, b:number, c:number) : number
}

const add2: Add = (a, b, c) => {
    return a + b
}

// 다른 개수의 파라미터를 가지게 되면, 나머지 파라미터도 타입을 지정해줘야함

const add3: Add = (a, b, c?:number) => {
    if(c) return a + b + c
    return a + b
}

// c 파라미터는 옵션이기 때문에 위와 같이 물음표와 콜론, 그리고 데이터 타입을 명시해 줘야 한다
// c가 있으면 a+b+c를 리턴 그렇지 않으면 a+b를 리턴

add3(1, 2);
add3(1, 2, 3);

// 인자를 3개 전달하든 2개 전달하든 잘 작동하는 모습