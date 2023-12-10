import express, { Express } from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app: Express = express()

app.use(cors())
app.use(express.json())

const devPort = "4000"

const port: string = process.env.PORT ?? devPort
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

