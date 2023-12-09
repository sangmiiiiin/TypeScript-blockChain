// 많이 사용되지는 않지만 뭔지 알아야함
// never는 함수가 절대 return하지 않을 때 발생함
// 예를 들어 함수에서 예외가 발생할때 (exception)

function hello(){
    return "X"
}

// 위와 같은 함수에 타입을 never로 지정하면 작동하지 않음

function hello():never {
    return "X"
}

function hello():never {
    throw new Error("XXX")
}

// 하지만 오류를 발생시키면 모든것이 정상화 됨
// return하지 않고 오류를 발생시키는 함수였음
// never는 타입이 두가지 일 수도 있는 상황에 발생할 수 있음
function hello(name: string|number){
   name + 1 // name이 문자열이기 때문에 1을 더할수 없다
}

// 그래서 typeof를 써야한다
function hello(name: string|number) {
    if (typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        name
    }
}
// 타입이 문자열이거나 숫자가 아니면 name의 타입은 never가 되어 어떤값도 리턴하지 않는다?
// 위 hello 함수에서 타입이 정확하게 들어온다면 else 구문은 절대 실행되지 않는다