import { playerUser } from "../../../../features/mokepon/players"
import { MokeponSockets } from "../../../../features/mokepon/sockets"
import * as AttackBtnCss from "./AttackBtn.css"

interface AttackBtnProps {
  attack: string
}

export const AttackBtn = ({ attack }: AttackBtnProps) => {
  const btnElm = document.createElement("button")
  btnElm.classList.add(AttackBtnCss.btn)

  btnElm.textContent = attack

  btnElm.addEventListener("click", () => {
    btnElm.disabled = true

    MokeponSockets.sendAttack(playerUser.mokepon!.playerId, attack as any)
  })

  return btnElm
}
