import { mokeponsOnline } from "../../../mokepon/mokepons.online"
import { SioListener } from "../../../socketsSetup"

export const sendPosition: SioListener = (io, socket) => {
  //
  socket.on("front:send-position", (playerId, { x, y }, cb) => {
    mokeponsOnline.updatePosition(playerId, { x, y })

    const enemies = mokeponsOnline.items.filter(player => {
      return playerId !== player.playerId
    })

    cb(enemies)
  })
}
