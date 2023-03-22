import { httpApp, expressApp } from "./app"
import { PORT } from "./config"
import sockets from "./sockets"
import { io } from "./socketsSetup"

// httpApp for listening and for socketio
httpApp.listen(PORT, () => {
  console.log("\n")
  console.log(`express app is on http://localhost:${PORT}`)
})

// expressApp for routes
expressApp.get("/", (cli, res) => {
  res.send("Platzi Mokepon Game")
})

sockets(io)
