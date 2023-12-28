const { Router } = require('express')



const routes = new Router()



routes.get("/", (request, response) => {
   return response.send('ola mundo')
})

module.exports = routes