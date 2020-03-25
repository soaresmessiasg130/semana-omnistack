// Importa o Express
const express = require('express')

const app = express()

app.use(express.json())

app.listen(3333)

/**
 * 
 */

app.post('/users', (request, response) => {

    //const params = request.params
    //console.log(params)

    const body = request.body
    console.log(body)

    return response.json({
        nome: 'Messias Soares',
        office: 'Developer Full Stack'
    })
})