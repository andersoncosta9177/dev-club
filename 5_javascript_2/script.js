

//function em javascript
// function printingAboutCode(){
//     console.log(`estou aprendendo javascript`)
// }

// printingAboutCode()


// function sum(n1, n2){
//     console.log(n1+n2)

// }

// sum(3,6)

// function sum(n1,n2){
//     console.log(n1 + n2)
// }

// const firstNumber =  10;
// const secondNumber = 20;

// sum(firstNumber, secondNumber)


// function sum(n1,n2){
//     return n1 + n2
// }

// const firstNumber =  10;
// const secondNumber = 20;

// console.log(sum(firstNumber, secondNumber))


// const sum = (n1,n2)=>  n1 + n2
// console.log(sum(3, 4))

// const calculate = (number1, number2, operation) => {
//     let result
//     switch (operation) {
//         case "+":
//             result = number1 + number2
//             break
//         case "-":
//             result = number1 - number2
//             break
//         case "*":
//             result = number1 * number2
//             break
//         case "/":
//             result = number1 / number2
//             break
//         default:
//             break
//     }

//     return result
// }
// console.log(calculate(10,4,"+"))
// console.log(calculate(10,4,"-"))
// console.log(calculate(10,4,"*"))
// console.log(calculate(10,4,"/"))

//   exercicios

// const numbers = (number)=>{
//     for(i =1; i<= number;i++){
//         console.log(`contando: ${i}`)
//     }
// }
// numbers(9)


// const table = (number)=>{
//     if(number > 10 ||number < 1){
//         console.log("Numero não aceito.")
//         return
//     }

//     for(let i = 1; i <= 10;i++){
//         console.log(`${i} x ${number} = ${i * number}`)
//     }

// }

// table(2)


// const data_de_agora =()=>{
//     console.log(new Date().toLocaleTimeString('pt-BR'))
//     console.log(new Date().getFullYear())

// }
// data_de_agora()


// const numbers = (n1,n2)=>{
//     if(n1 > n2){
//         console.log(`${n1} é maior`)
//     }else{
//         console.log(`${n2} é maior`)
//     }
// }
// numbers(5,1)

// const students = ['Miguel', 'Pedro','Alan','Fábio']
// // students.splice(2,1)
// // students.push("Augusto")
// // const newStudents = students.slice(1)
// // students.pop()
// students.shift()
// console.log(students)


// const students = ['Miguel', 'Pedro','Alan','Fábio']
// students.push('Rodolfo', 'Andressa')
// // console.log(students)
// // console.log(students.length)
// console.log(students.sort())
//  delete students[0]
//  console.log(students)

// const students = [
//     { nome: 'maria', age: 34, sexo: 'f' },
//     { nome: 'Miguel', age: 10, sexo: 'm' },
//     { nome: 'gustavo', age: 31, sexo: 'm' },
//     { nome: 'Pedro', age: 29, sexo: 'm' },
//     { nome: 'Eliana', age: 19, sexo: 'f' },
//     { nome: 'Ale', age: 45, sexo: 'f' },
// ]

// let allStudents = 0;
// students.forEach((student) => {
//     allStudents += student.age

// })
// const averageAge = allStudents / students.length
// console.log(`A media de idade dos alunos é: ${averageAge.toFixed(0)}`)


// const numeros = [1,2,3,4,5,6,7,8,9,10]
// const students = [
//     { nome: 'maria', age: 16, sexo: 'f' },
//     { nome: 'Miguel', age: 10, sexo: 'm' },
//     { nome: 'gustavo', age: 31, sexo: 'm' },
//     { nome: 'Pedro', age: 29, sexo: 'm' },
//     { nome: 'Eliana', age: 16, sexo: 'f' },
//     { nome: 'Ale', age: 11, sexo: 'f' },
// ]

// const newNumeros = numeros.map( (numero)=>{
//     return numero * 2
// })

// console.log(newNumeros)

// const array = students.map( (student)=>{
//     // const newStudent = {
//     //     name: student.nome +  " da silva",
//     //     age: student.age -5
//     // }
//     // return newStudent
//     if(student.age > 18){
//         console.log(`o aluno ${student.nome} é maior de idade com ${student.age}`)

//     }else{
//         console.log(`o aluno ${student.nome} é menor de idade com ${student.age}`)

//     }
// })


// const numbers = [1,2,3,4]

// const dobro = number => number *2
// const newArray = numbers.map( dobro)
// console.log(newArray)

// const list = [
//     {nome: 'Anderson', vip: false},
//     {nome: 'Fabio', vip: true},
//     {nome: 'Miguel', vip: false},
//     {nome: 'Tulipa', vip: true},
//     {nome: 'Gatita', vip: false},
//     {nome: 'Vanda', vip: true},
// ]

// const newList = list.map( client => {
//     const newList = {
//         nome: client.nome,
//         vip: client.vip,
//         sector: client.vip ? "Black": "Green"

//     }

//     return newList
// })

// console.log(newList)




// const students = [
//     { nome: 'maria', age: 16, sexo: 'f', grade:8 },
//     { nome: 'Miguel', age: 10, sexo: 'm', grade:5  },
//     { nome: 'gustavo', age: 31, sexo: 'm', grade:4  },
//     { nome: 'Pedro', age: 29, sexo: 'm', grade:7  },
//     { nome: 'Eliana', age: 16, sexo: 'f', grade:6  },
//     { nome: 'Ale', age: 11, sexo: 'f', grade:5 },
// ]

// const approvedStudents = students.map(student => {
//     let approvedOrNot 
//     if(student.grade >= 7){
//         approvedOrNot = "Aprovado"
//     }else{
//         approvedOrNot =  'Reprovado'
//     }
//     const students = {
//         nome: student.nome,
//         finalResult: approvedOrNot

//     }
//     return students
// })


// console.log(approvedStudents)


// const list = [
//     {nome: 'Anderson', vip: false},
//     {nome: 'Fabio', vip: true},
//     {nome: 'Miguel', vip: false},
//     {nome: 'Tulipa', vip: true},
//     {nome: 'Gatita', vip: false},
//     {nome: 'Vanda', vip: true},
// ]

// const justVips = list.filter( client =>{
//     return client.vip
// })

// console.log(justVips)


// const students = [
//     { nome: 'maria', age: 16, sexo: 'f', grade:8 },
//     { nome: 'Miguel', age: 10, sexo: 'm', grade:5  },
//     { nome: 'gustavo', age: 31, sexo: 'm', grade:4  },
//     { nome: 'Pedro', age: 29, sexo: 'm', grade:7  },
//     { nome: 'Eliana', age: 16, sexo: 'f', grade:6  },
//     { nome: 'Ale', age: 11, sexo: 'f', grade:5 },
// ]

// const newStudents = students.filter( student =>{
//     return student.grade >= 7 && student.age >=18
// })
// console.log(newStudents)


// const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

// const newList = list.filter(numbers => {
//     return numbers % 2 === 0 && numbers % 5 === 0
// })
// console.log(newList)

// const companies = [
//     { name: 'Samsumg', marketValue: 60, CEO: 'Kyn Suk', FoundedOn: 1938 },
//     { name: 'Microsoft', marketValue: 478, CEO: 'Satya Nadella', FoundedOn: 1976 },
//     { name: 'Intel', marketValue: 156, CEO: 'Brian Krzanich', FoundedOn: 1968 },
//     { name: 'Facebook', marketValue: 356, CEO: 'Mark zuckerberg', FoundedOn: 2004 },
//     { name: 'Spotify', marketValue: 30, CEO: 'Daniel ek', FoundedOn: 2006 },
//     { name: 'Apple', marketValue: 856, CEO: 'Tim Cook ', FoundedOn: 1976 },
// ]

// const newCompanies = companies.filter(company => {
//     return company.FoundedOn > 1975 && company.marketValue > 200
// })

// console.log(newCompanies)



// const list = [1,2,3,4]

// const sum = list.reduce((acc, curent) => {
//    return acc + curent

// },1)

// console.log(sum)

// const sum = list.reduce( (acc,current)=> acc + current, 0)
// console.log(sum)

const companies = [
    { name: 'Samsumg', marketValue: 60, CEO: 'Kyn Suk', FoundedOn: 1938 },
    { name: 'Microsoft', marketValue: 478, CEO: 'Satya Nadella', FoundedOn: 1976 },
    { name: 'Intel', marketValue: 156, CEO: 'Brian Krzanich', FoundedOn: 1968 },
    { name: 'Facebook', marketValue: 356, CEO: 'Mark zuckerberg', FoundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel ek', FoundedOn: 2006 },
    { name: 'Apple', marketValue: 856, CEO: 'Tim Cook ', FoundedOn: 1976 },
]

// const newCompanies = companies.reduce((acc,current)=>{
//     return acc + current.marketValue
// },0)
// console.log(newCompanies)

// const Add10Percent = company=>{
//     company.marketValue = company.marketValue + company.marketValue / 10
//     return company
// }

// const oldCompany = company => company.FoundedOn < 2000 

// const sumCompay = (acc, current)=> acc + current.marketValue
// const myBestCompany = companies
// .map(Add10Percent)
// .filter(oldCompany)
// .reduce(sumCompay,0)
// console.log(myBestCompany)