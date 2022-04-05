interface UserData {
    name : string
    age : number
}

export default function CustomFunc1( input : UserData ){
    console.log(`Users Name = ${input.name}, Users Age = ${input.age}`)
}