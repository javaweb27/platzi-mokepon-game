import mokemapSrc from "../../assets/mokemap.webp"
import { canvasCss } from "./canvas.css"

export const mapBackgroundImgElm = new Image()
mapBackgroundImgElm.src = mokemapSrc
// bg image is rendered in game loop of Mokepon

export const canvasElm = document.createElement("canvas")
export const canvasCtx2D = canvasElm.getContext("2d")

canvasElm.width = 320
canvasElm.height = 240

// canvasCtx2D!.drawImage(mapBackgroundImgElm, 0, 0, canvasElm.width, canvasElm.height)

canvasElm.classList.add(canvasCss)
