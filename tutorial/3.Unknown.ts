let ab : unknown;

// TS로 부터 일종의 보호를 받게됨
// 어떤 작업을 하려면 이 변수의 타입을 먼저 확인 해야 하는 방식으로!

// let bc = ab + 1;

// TS는 ab의 타입을 모르기 때문에 허용해 주지 않음

if(typeof ab === 'number'){
    let bc = ab + 1;
}

// if문안에 스코프에서는 ab의 타입이 number이다
// 코드안에서 ab가 number인것을 확인했기 때문

// 변수의 타입을 미리 알지 못할때 unknown사용

