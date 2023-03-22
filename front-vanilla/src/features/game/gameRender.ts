import { canvasCtx2D, canvasElm, canvasUtils, mapBackgroundImgElm } from "../canvas"
import { Mokepon } from "../mokepon/entities/Mokepon"
import { playerAllEnemies, playerUser } from "../mokepon/players"
import { MokeponSockets } from "../mokepon/sockets"
import { isMokeponCollising } from "../mokepon/utils/isMokeponCollising"

export const gameRender = (playerMokepon: Mokepon) => {
  canvasCtx2D!.drawImage(mapBackgroundImgElm, 0, 0, canvasElm.width, canvasElm.height)
  canvasUtils.drawMokepon(playerMokepon)

  playerAllEnemies.mokepons.forEach(mokepon => {
    canvasUtils.drawMokepon(mokepon)

    if (isMokeponCollising(mokepon)) {
      MokeponSockets.startCombat(playerUser.mokepon?.playerId!, mokepon.playerId)
    }
  })
}
