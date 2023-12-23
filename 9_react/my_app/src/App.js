import React, { useState, useRef, useEffect} from "react";
import axios from 'axios'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from "./style";
import People from './assets/peoples.svg'
import Arrow from './assets/seta.svg'
import Trash from './assets/18297 4.png'


const App = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()



  async function addNewUser() {



  }


  useEffect( ()=>{
    async function fetchUsers(){
      const { data: newUsers } =  await  axios.get("http://localhost:3001/users")
      setUsers(newUsers)

    }
fetchUsers()

  },[])


  async function deletar(id) {
    await axios.delete(`http://localhost:3001/users/${id}`)
    const newUser = users.filter(user => user.id !== id)
    setUsers(newUser)


  }

  return (
    <Container >
      <Image src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua idade" />

        <Button onClick={addNewUser}>Cadastrar  <img src={Arrow} alt="seta" /></Button>


        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deletar(user.id)}> <img src={Trash} alt="lixeira" /></button>

            </User>
          ))
          }
        </ul> 



      </ContainerItens>
    </Container>
  )
}

export default App 