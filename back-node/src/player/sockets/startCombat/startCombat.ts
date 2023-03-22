import { mokeponsOnline } from "../../../mokepon/mokepons.online"
import { SioListener } from "../../../socketsSetup"

export const startCombat: SioListener = (io, socket) => {
  socket.on("front:start-combat", (playerUserId, playerEnemyId) => {
    console.log("\n\nthe player has collided with a mokepon")

    const players = mokeponsOnline.updateEnemyId(playerUserId, playerEnemyId)

    if (undefined === players) {
      console.log("player or enemy is already in combat")
      return
    }

    console.log("emitting back:start-combat to both players")
    const { enemyMokepon, playerMokepon } = players

    io.to(playerMokepon.socketId).emit("back:start-combat", {
      name: enemyMokepon.name,
      playerId: enemyMokepon.playerId,
    })
    io.to(enemyMokepon.socketId).emit("back:start-combat", {
      name: playerMokepon.name,
      playerId: playerMokepon.playerId,
    })
  })
}
