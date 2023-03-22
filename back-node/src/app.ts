import cors from "cors"
import express from "express"
import http from "http"
import { CORS_URL } from "./config"

export const expressApp = express()

export const httpApp = http.createServer(expressApp)

expressApp.use(express.json())
expressApp.use(
  cors({
    origin: [CORS_URL],
  })
)

// expressApp.use("/api/mokepon", playerRouter)
