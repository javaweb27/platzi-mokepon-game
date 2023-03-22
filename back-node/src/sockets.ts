import { mokeponsOnline } from "./mokepon/mokepons.online"
import { joinGame } from "./player/sockets/joinGame"
import { sendAttack } from "./player/sockets/sendAttack"
import { sendPosition } from "./player/sockets/sendPosition"
import { startCombat } from "./player/sockets/startCombat"
import { SioListener, SioServer } from "./socketsSetup"

const allSockets: SioListener[] = [joinGame, sendPosition, startCombat, sendAttack]

export default (io: SioServer) => {
  io.on("connection", socket => {
    //when connect
    console.log("a user connected to socketio.")

    // debug
    // socket.onAny((eventName, ...args) => {
    //   console.log("\n------")
    //   console.log(`event tiggered: ${eventName}`)
    //   console.log("args:", args)
    //   console.log("\n")
    // })

    for (const listener of allSockets) {
      listener(io, socket)
    }

    const disconnect: SioListener = (io, socket) => {
      socket.on("disconnect", () => {
        mokeponsOnline.remove(socket.id)
      })
    }

    disconnect(io, socket)
  })
}
