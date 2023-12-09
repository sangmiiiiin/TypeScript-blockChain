let a : undefined = undefined
let b : null = null

// optional type(선택적 타입)은 undefined가 될수 있다

type Charactor = {
    name:string
    age?:number         // 숫자이거나 undefined
}

const sangmins : Charactor = {
    name: "hi",
    age: 12
}