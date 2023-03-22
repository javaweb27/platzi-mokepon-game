import { mokeponsOnline } from "../../../mokepon/mokepons.online"
import { SioListener } from "../../../socketsSetup"

export const joinGame: SioListener = (io, socket) => {
  //
  socket.on("front:join-game", (mokeponName, cb) => {
    console.log("\n\nadding mokepon")

    const { playerId, position } = mokeponsOnline.add({
      mokeponName,
      socketId: socket.id,
    })
    console.log("current mokepons:", mokeponsOnline.items)
    console.log("\n\n\n")
    console.log("from sockets: front:join-game")
    console.log("callback with playerId string: " + playerId)
    console.log("length string: " + playerId.length)

    cb({ playerId, position })
  })
}
