const express = require("express")
const app = express()
const  cors  =  require("cors")

const uuid = require("uuid")
app.use(express.json())
app.use(cors())



const users = []









app.get('/users', (req, res) => {
    const { nome, age } = req.body
    return res.json({ users })
})



app.post("/users", (req, res) => {


    try {
        const { name, age } = req.body
    const user = { id: uuid.v4(), name, age }
    users.push(user)
    return res.status(201).json(user)
        

    } catch (error) {
        return res.status(500).json({error: 'Erro interno do servidor'})
        
    } finally{
        console.log("tudo corretamente!")
    }
    
})







app.put("/users/:id", (req, res) => {
    const { name, age } = req.body
    const { id } = req.params


    const updatesUsers = { id, name, age }
    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return res.status(404).json({ mesage: "user not found" })
    }
    users[index] = updatesUsers

    return res.json(updatesUsers)
})




app.delete('/users/:id', (req, res) => {
    const { id } = req.params

    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return res.status(404).json({ mesage: "user not found" })
    }

    users.splice(index, 1)



    return res.status(204).json()
})





app.listen(3001, () => {
    console.log("Rodando na porta 1337 ✔")
})