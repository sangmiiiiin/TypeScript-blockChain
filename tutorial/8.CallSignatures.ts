function plus(a:number, b:number) {
    return a + b
}

// function add(a:number, b:number) : number{
//      return a + b
// }

// 위와 같이 숫자를 인자로 받기 때문에 매개변수 뒤에 리턴하는 값의 타입을 적어주지 않아도 됨

const plus2 = (a: number, b:number) => a + b

// 매개변수에 타입을 원하는대로 지정하고 싶다
// call signature은 함수 위에 마우스를 올렸을 때 보이는것
// 함수의 반환 타입과 어떤 값을 넣어야 하는지 알려줌

type ADD = (a: number, b: number) => number;
// 함수의 call signature 타입을 만드는 방법임
// 위와 같이 미리 타입을 지정해놓고 함수를 정의 할때 함수명 옆에 타입명을 콜론과 함께 적어준다
// 아래는 함수 선언시 타입 지정 예시이다    

const plus3: ADD = (a, b) => a + b
// 이와같이 타입을 사용자 정이로 만들 수 있고, 함수가 어떻게 작동하는지 서술해둘 수 있음
// React로 코딩 하고 있다면 TS에게 함수가 어떻게 작동하는지 설명해 줘야함

