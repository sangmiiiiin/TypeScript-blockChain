const numbers: readonly number[] = [1, 2, 3, 4];
numbers.push(1)

const names: readonly string[] = ["1", "2"]
names.push("3");

//readonly 붙여주면 수정이 안됨 불변성을 가진다 JS에는 없는 기능

const player: [string, number, boolean] = ["sangmin", 1, true]

// tuple TS에게 배열의 요소 타입을 지정

player[0] = 1

// player의 첫번째 인덱스는 문자열로 타입명시가 되어있어 숫자로 변경할 수 없다

const players: readonly[string, number, boolean] = ["sangmin", 1, true]

// tuple과 readonly를 한꺼번에도 사용가능

players[0] = "HI"

// readonly기 때문에 에러, 에러에 마우스 갖다대면 readonly라고 적힌다