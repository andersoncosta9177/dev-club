import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Container, Image, User } from "./style";
import Avatar from  "../../assets/peoples2.svg"
import Arrow from '../../assets/seta.svg'
import Trash from '../../assets/trash.png'
import {useNavigate}  from 'react-router-dom'
import H1  from '../../containers/Title'
import ContainerItens from "../../containers/ContainerItens";
import Button from "../../containers/Button";


const Users = () => {

  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      console.log(newUsers)
      setUsers(newUsers)

    }
    fetchUsers()

  }, [])


  async function deletar(id) {
    await axios.delete(`http://localhost:3001/users/${id}`)
    const newUser = users.filter(user => user.id !== id)
    setUsers(newUser)


  }

  return (
    <Container >
      <Image src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1 title="Usuarios"></H1>
        



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

        <Button isBack={true} onClick={()=>navigate("/")} > <img src={Arrow} alt="seta" />Voltar  </Button>
       

      </ContainerItens>
    </Container>
  )
}

export default Users