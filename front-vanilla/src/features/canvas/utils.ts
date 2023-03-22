import { Mokepon } from "../mokepon/entities/Mokepon"
import { canvasElm } from "./canvas"

/**
 * mokepon can't move outside of the map
 */
export function clampMokeponPosition(position: Mokepon["position"]): Mokepon["position"] {
  const maxWidth = canvasElm.width - 40
  const maxHeight = canvasElm.height - 40

  const isOutsideRight = position.x > maxWidth

  const isOutsideBottom = position.y > maxHeight

  return {
    x: position.x < 0 ? 0 : isOutsideRight ? maxWidth : position.x,
    y: position.y < 0 ? 0 : isOutsideBottom ? maxHeight : position.y,
  }
}
