import { Mokepon } from "../../../../features/mokepon/entities/Mokepon"
import { playerUser } from "../../../../features/mokepon/players"
import { MokeponSockets } from "../../../../features/mokepon/sockets"
import { changeView } from "../../../../main"
import { CombatMap } from "../../../CombatMap"
import { getNameOfMokeponSelected } from "../../utils/getMokeponSelected"
import * as ContinueBtnCss from "./ContinueBtn.css"

export const ContinueBtn = () => {
  const btnElm = document.createElement("button")

  btnElm.classList.add(ContinueBtnCss.btn)
  btnElm.textContent = "Continue"

  btnElm.addEventListener("click", async () => {
    const selectedMokeponName = getNameOfMokeponSelected()

    const { playerId, position } = await MokeponSockets.joinGame(selectedMokeponName)

    const newMokepon = new Mokepon(playerId, selectedMokeponName, 5, position)

    playerUser.setMokepon(newMokepon)

    changeView(CombatMap())
  })

  return btnElm
}
