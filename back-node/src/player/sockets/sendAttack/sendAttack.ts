import { mokeponsOnline } from "../../../mokepon/mokepons.online"
import { SioListener } from "../../../socketsSetup"

export const sendAttack: SioListener = (io, socket) => {
  socket.on("front:send-attack", (playerId, attack) => {
    const isTheLastAttack = mokeponsOnline.updateAttacks(playerId, attack)

    if (false === isTheLastAttack) return

    const player = mokeponsOnline.get(playerId)

    const enemy = player ? mokeponsOnline.get(player.enemyId!) : undefined

    if (!player || !enemy) {
      console.log("\n\nplayer or enemy doesn't exist")
      console.log("player", player)
      console.log("enemy", enemy)
      return
    }

    // it means that the player used all his attacks,
    // but not the enemy
    if (enemy.attacks.length !== 5) return

    // both players finished using all their attacks.

    // calculate the result of both players
    const { isPlayerVictory, playerPoints, enemyPoints } = processCombat(
      player.attacks,
      enemy.attacks
    )

    io.to(player.socketId).emit("back:send-combat-result", {
      isVictory: isPlayerVictory === null ? null : isPlayerVictory === true,
      playerAttacks: player.attacks,
      playerPoints,
      enemyAttacks: enemy.attacks,
      enemyPoints,
    })
    io.to(enemy.socketId).emit("back:send-combat-result", {
      isVictory: isPlayerVictory === null ? null : isPlayerVictory === false,
      playerAttacks: enemy.attacks,
      playerPoints: enemyPoints,
      enemyAttacks: player.attacks,
      enemyPoints: playerPoints,
    })

    mokeponsOnline.remove(player.socketId)
    mokeponsOnline.remove(enemy.socketId)
  })
}

function processCombat(playerAttacks: string[], enemyAttacks: string[]) {
  const countAttacks = playerAttacks.length // 5
  let playerPoints = 0
  let enemyPoints = 0

  for (let index = 0; index < countAttacks; index++) {
    if (playerAttacks[index] === enemyAttacks[index]) {
      //nothing
    } else if (playerAttacks[index] == "Fire" && enemyAttacks[index] == "Earth") {
      playerPoints++
    } else if (playerAttacks[index] == "Water" && enemyAttacks[index] == "Fire") {
      playerPoints++
    } else if (playerAttacks[index] == "Earth" && enemyAttacks[index] == "Water") {
      playerPoints++
    } else {
      enemyPoints++
    }
  }

  const isDraw = playerPoints === enemyPoints

  const isPlayerVictory = isDraw ? null : playerPoints > enemyPoints

  return { isPlayerVictory, playerPoints, enemyPoints }
}
