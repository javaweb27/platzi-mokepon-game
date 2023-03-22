import { canvasCtx2D, canvasElm } from "../canvas"
import { clampMokeponPosition } from "../canvas/utils"
import { Mokepon } from "../mokepon/entities/Mokepon"
import { playerAllEnemies } from "../mokepon/players"
import { MokeponSockets } from "../mokepon/sockets"
import { gameRender } from "./gameRender"

const game = {
  intervalId: undefined as ReturnType<typeof setInterval> | undefined,
}

const INTERVAL_TIMEOUT = 1000 / 30 // 30 fps

export const start = (playerMokepon: Mokepon) => {
  gameRender(playerMokepon)

  game.intervalId = setInterval(() => {
    playerMokepon.position = clampMokeponPosition({
      x: playerMokepon.position.x + playerMokepon.velocity.x,
      y: playerMokepon.position.y + playerMokepon.velocity.y,
    })

    MokeponSockets.sendPosition(playerMokepon.playerId, playerMokepon.position).then(
      enemyPlayers => {
        const newEnemies = enemyPlayers.map(({ name, playerId, position }) => {
          const newEnemyMokepon = new Mokepon(playerId, name as any, 5, position)

          return newEnemyMokepon
        })

        playerAllEnemies.setMokepons(newEnemies)
      }
    )

    canvasCtx2D!.clearRect(0, 0, canvasElm.width, canvasElm.height)

    gameRender(playerMokepon)
  }, INTERVAL_TIMEOUT)
}

export const stop = () => {
  clearInterval(game.intervalId)
}
