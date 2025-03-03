import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (res, req) => {
    res.send('Hello, world')
})

app.post('/login', (res, req) => {})

app.post('/register', (res, req) => {})

app.post('/logout', (res, req) => {})

app.get('/protected', (res, req) => {})

app.listen(PORT, () => {
    console.log('App listening to the port ' + PORT)
})