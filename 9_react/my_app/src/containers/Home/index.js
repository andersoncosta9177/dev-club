import React, { useState, useRef } from "react";
import axios from 'axios'
import { Container, Image, InputLabel, Input } from "./style";
import People from  "../../assets/peoples.svg"
import Arrow from '../../assets/seta.svg'
import {useNavigate } from 'react-router-dom'
import H1 from '../../containers/Title'
import ContainerItens from "../../containers/ContainerItens";
import Button from "../../containers/Button";

const Home = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()



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

    navigate("/usuarios")

  }

  return (
    <Container >
      <Image src={People} />
      <ContainerItens>
        <H1 title="Cadastro"></H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua idade" />

        <Button  onClick={addNewUser}>Cadastrar  <img src={Arrow} alt="seta" /></Button>





      </ContainerItens>
    </Container>
  )
}

export default Home 