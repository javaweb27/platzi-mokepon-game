import { Mokepon } from "../mokepon/entities/Mokepon"
import { canvasCtx2D } from "./canvas"

export const drawMokepon = (mokepon: Mokepon) => {
  canvasCtx2D!.drawImage(
    mokepon.imgElm,
    mokepon.position.x,
    mokepon.position.y,
    mokepon.width,
    mokepon.height
  )
}
