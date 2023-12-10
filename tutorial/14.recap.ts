type PlayerA = {
    name: string
}

type PlayerAA = PlayerA & {
    lastName: string
}

// property를 추가하려면 type은 재선언이 안됨
type PlayerAA = {}
const playerA : PlayerAA = {
    name: "sangmin",
    lastName: "Lyu"
}


////

interface PlayerB {
    name: string
}

interface PlayerB {
    lastName: string
}

interface PlayerB {
    health: number
}
const playerB : PlayerB = {
    name: "sangmin",
    lastName: "Lyu",
    health: 10
}

type PlayerA = {
    firstName: string
}

interface PlayerB {
    firstName: string
}

class User implements PlayerB {
    constructor(
        public firstName: string
    ){}
}


// 타입스크립트에게 오브젝트의 모양을 알려주기 위해서는 interface를 쓰고
// 그 외 모든 상황엔 type을 사용한다고 알고 있으면 된다