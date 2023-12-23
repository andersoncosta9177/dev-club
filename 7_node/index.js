const express = require("express")
const uuid = require("uuid")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const users = []


const checkUserId = (request, response, next) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ error: "Usuario não encontrado" })
    }
    request.userIndex = index
    request.userId = id
    next()
}


app.get("/users", (request, response) => {
    // const { name, age } = request.body
    console.log("a rota foi chamada")
    return response.json(users)

})

app.post("/users", (request, response) => {
    try {
        const { name, age } = request.body
        const user = { id: uuid.v4(), name, age }
        users.push(user)
        return response.status(201).json(user)
    } catch (error) {
        return response.status(400).json({ error: "Error internal" })

    } finally {
        console.log("finished  execution")
    }
})


app.put("/users/:id", checkUserId, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId;
    const updateUsers = { id, name, age }
    users[index] = updateUsers
    return response.json(updateUsers)
})


app.delete("/users/:id", checkUserId, (request, response) => {
    const index = request.userIndex
    users.splice(index, 1)
    return response.status(204).json()
})


const port = 3001
app.listen(port, () => {
    console.log(`server started  ativo on port: ${port}`)
})






