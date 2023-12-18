const express = require("express")
const app = express()
const uuid = require("uuid")
app.use(express.json())



const users = []









app.get('/users', (req, res) => {
    const { nome, age } = req.body
    return res.json({ users })
})



app.post("/users", (req, res) => {
    const { name, age } = req.body
    const user = { id: uuid.v4(), name, age }
    users.push(user)
    return res.status(201).json(user)
})

app.put("/users/:id", (req, res) => {
    const { id } = req.params
    const { name, age } = req.body

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





app.listen(1337, () => {
    console.log("Rodando na porta 1337 ✔")
})