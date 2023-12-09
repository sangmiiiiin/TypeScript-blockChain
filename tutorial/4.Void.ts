// void는 아무것도 return하지 않는 함수를 대상으로 사용

function hello() {
    console.log('x')
}

// 보통 void를 지정해줄 필요 없이 TS는 함수가 아무것도 return하지 않는다는 것을 자동으로 인식함
// 원하면 써줘도 되지만 그럴필요 없음

const zyx = hello();
zyx.toUpperCase()

// void타입엔 toUpperCase가 없다고 나옴 마우스 올려보면 확인가능