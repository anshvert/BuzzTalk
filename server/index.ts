import express, { Express } from "express"
import dotenv from "dotenv"
import cors from "cors"
import AuthRoutes from "./routes/AuthRoutes.ts"

dotenv.config()
const app: Express = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth",AuthRoutes)

const devPort = "4000"

const port: string = process.env.PORT ?? devPort
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

