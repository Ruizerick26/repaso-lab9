const express = require( 'express')
const app = express()
const routes = require('./routes')
const PORT = 3000

app. use('/usuario/:id', routes)

app. listen (PORT, () => {
    console. log(`
    Servidor corriendo en:
        http://Localhost:${PORT}    
    `)
})
