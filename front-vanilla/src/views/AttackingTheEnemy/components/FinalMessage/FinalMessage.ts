import { changeView } from "../../../../main"
import { SelectMokepon } from "../../../SelectMokepon"
import * as FinalMessageCss from "./FinalMessage.css"

export const FinalMessage = ({ isVictory }: { isVictory: boolean | null }) => {
  const combatResultText =
    isVictory === null ? "Draw" : isVictory ? "Well done, you win" : "You lose"

  const containerElm = document.createElement("div")
  containerElm.classList.add(FinalMessageCss.container)

  containerElm.innerHTML = /* HTML */ `<p>${combatResultText}</p>`

  const restartGameBtnElm = document.createElement("button")

  containerElm.appendChild(restartGameBtnElm)
  restartGameBtnElm.classList.add(FinalMessageCss.btn)
  restartGameBtnElm.textContent = "Restart game"
  restartGameBtnElm.onclick = () => {
    changeView(SelectMokepon())
  }

  return containerElm
}
