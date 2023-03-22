import { Mokepon } from "../../../../features/mokepon/entities/Mokepon"
import * as MokeponDetailsCss from "./MokeponDetails.css"

export const MokeponDetails = (mokepon: Mokepon, isEnemy: boolean) => {
  const containerElm = document.createElement("div")
  containerElm.classList.add(MokeponDetailsCss.container)

  const mokeponImgElm = document.createElement("img")
  mokeponImgElm.src = mokepon.imgElm.src
  mokeponImgElm.classList.add(MokeponDetailsCss.img)

  const mokeponNameElm = document.createElement("h3")
  mokeponNameElm.textContent = mokepon.name
  mokeponNameElm.classList.add(MokeponDetailsCss.name)

  const playerTextElm = document.createElement("p")
  playerTextElm.textContent = isEnemy ? "Enemy" : "You"
  playerTextElm.classList.add(MokeponDetailsCss.playerText)

  containerElm.appendChild(mokeponImgElm)
  containerElm.appendChild(mokeponNameElm)
  containerElm.appendChild(playerTextElm)

  return containerElm
}
