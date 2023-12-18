class Person {

    constructor(name, age) {
        console.log(`Hello, i am ${name}`)

        this.name = name
        this.age = age

    }
    talk() {
        console.log(`Hello, my name is ${this.name} and i am ${this.age} anos!`)
    }
}


const person1 = new Person("Anderson", 33)
person1.talk()

const person2 = new Person("Miguel", 10)
person2.talk()


const person3 = new Person("Gatita", 2)
person3.talk()

const person4 = new Person("Tulipa", 3)
person4.talk()
