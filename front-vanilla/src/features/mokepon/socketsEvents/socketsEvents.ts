import { changeView } from "../../../main"
import { socket } from "../../../socket"
import { AttackingTheEnemy } from "../../../views/AttackingTheEnemy"
import { showDoneAttacks } from "../../../views/AttackingTheEnemy/AttackingTheEnemy"
import { gameLoop } from "../../game"
import { Mokepon } from "../entities/Mokepon"
import { playerEnemy, playerUser } from "../players"

export function socketsEvents() {
  socket.on("back:start-combat", enemyMokepon => {
    gameLoop.stop()

    playerEnemy.setMokepon(
      new Mokepon(enemyMokepon.playerId, enemyMokepon.name as any, 5, { x: 0, y: 0 })
    )

    changeView(AttackingTheEnemy())
  })

  socket.on("back:send-combat-result", data => {
    const { isVictory, playerAttacks, enemyAttacks, playerPoints, enemyPoints } = data

    playerEnemy.setAttacks(null)
    playerEnemy.mokepon = null

    playerUser.setAttacks(null)
    playerUser.mokepon = null

    showDoneAttacks(
      playerAttacks as any[],
      playerPoints,
      enemyAttacks as any[],
      enemyPoints,
      isVictory
    )
  })
}
