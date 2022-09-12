import express from 'express'

const app = express()
const router = express.Router()

router.use(express.json());



app.listen(333)
