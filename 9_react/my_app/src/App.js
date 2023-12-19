import React, { useState, useRef } from "react";

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from "./style";
import People from './assets/peoples.svg'
import Arrow from './assets/seta.svg'
import Trash from './assets/18297 4.png'


const App = () => {

  const [users, setUsers] = useState([])
const inputName = useRef()
const inputAge = useRef()



function addNewUser() {

  setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]);




}



function deletar(id){
const newUser = users.filter(user =>user.id !== id)
setUsers( newUser)


}



  return (
    <Container >
      <Image src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge}  placeholder="Digite sua idade" />

        <Button onClick={addNewUser}>Cadastrar  <img src={Arrow} alt="seta" /></Button>


        <ul>
          {users.map(user => (
            <User>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={()=>deletar(user.id)}> <img src={Trash} alt="lixeira" /></button>

            </User>
          ))
          }
        </ul>



      </ContainerItens>
    </Container>
  )
}

export default App 