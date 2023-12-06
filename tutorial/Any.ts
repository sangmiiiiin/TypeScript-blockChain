let c = []

// 비어있는 값을 쓰면 any가 된다
// any는 TS의 보호장치를 빠져나오고 싶을때 사용
// any를 사용하지 않는것을 권장함

const d : any[] = [1, 2, 3, 4];
const e : any = true;

const f = d + e;    // d와 e는 일반 JS이기 때문에 배열과 불리언을 더해도 에러가 발생하지 않는다

// any를 사용하는 규칙이 있음

