type Age = number;
type Name = string;
type Player = {
    readonly name:Name,
    age?:Age
}

const wonjun : Player = {
    name: "fuck",
    age: 12
}

function playerMaker(name:string) : Player{
    return {
        name
    }
}

const sangmin = playerMaker("sangmin")
sangmin.age = 12
wonjun.name = "las"

