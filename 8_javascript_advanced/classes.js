// class Person {

//     constructor(name, age) {
//         console.log(`Hello, i am ${name}`)

//         this.name = name
//         this.age = age

//     }
//     talk() {
//         console.log(`Hello, my name is ${this.name} and i am ${this.age} anos!`)
//     }
// }


// const person1 = new Person("Anderson", 33)
// person1.talk()

// const person2 = new Person("Miguel", 10)
// person2.talk()


// const person3 = new Person("Gatita", 2)
// person3.talk()

// const person4 = new Person("Tulipa", 3)
// person4.talk()


class Person {

    constructor(name, age, profissao, empresa){
        this.name = name
        this.age = age
        this.profissao = profissao
        this.empresa = empresa
    }
    name;
    age;
  

    talk(){
        console.log(`hello, my name is ${this.name} and i'am ${this.age} years old`)
    }
    profissao;
    empresa
    profission(){
        console.log(`Eu sou ${this.profissao} na empresa ${this.empresa}`)
    }
}


const person1 = new  Person("Anderson", 34, "programador",  "Dell")
person1.talk()
person1.profission()

// const person2 = new  Person("Fabio", 40)
// person2.talk()

// const person3 = new  Person("Maria", 35)
// person3.talk()

// const person4 = new  Person("Miguel", 10)
// person4.talk()