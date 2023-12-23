import React, { useState, useRef } from "react";
import axios from 'axios'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./style";
import People from  "../../assets/peoples.svg"
import Arrow from '../../assets/seta.svg'


const Home = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()



  async function addNewUser() {
    if (!inputName.current.value || !inputAge.current.value) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })

    setUsers([
      ...users, newUser
    ])

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

        <Button to="/usuarios" onClick={addNewUser}>Cadastrar  <img src={Arrow} alt="seta" /></Button>





      </ContainerItens>
    </Container>
  )
}

export default Home 