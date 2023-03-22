import { css } from "@emotion/css"
import { Mokepon } from "../../features/mokepon/entities/Mokepon"
import { MokeponNames } from "../../features/mokepon/enums/mokeponNames"
import { playerEnemy, playerUser } from "../../features/mokepon/players"
import { FinalMessage } from "./components/FinalMessage"
import { MokeponDetails } from "./components/MokeponDetails"
import { Title } from "./components/Title"
import { AvailableAttacks } from "./containers/AvailableAttacks"
import { DoneAttacks } from "./containers/DoneAttacks"
import * as AttackingTheEnemyCss from "./AttackingTheEnemy.css"

let playerUserResultElm: HTMLElement
let playerEnemyResultElm: HTMLElement

let availableAttacksElm: HTMLDivElement

let titleElm = Title()

const titleContainerElm = document.createElement("div")
titleContainerElm.appendChild(titleElm)

export const AttackingTheEnemy = () => {
  const containerElm = document.createElement("section")

  containerElm.classList.add(AttackingTheEnemyCss.section)

  containerElm.appendChild(titleContainerElm)
  containerElm.appendChild((availableAttacksElm = AvailableAttacks()))

  const playersContainerElm = document.createElement("section")
  playersContainerElm.classList.add(
    css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.9rem",
    })
  )

  playerUserResultElm = PlayerResult(playerUser.mokepon!, false)
  playerEnemyResultElm = PlayerResult(playerEnemy.mokepon!, true)

  playersContainerElm.appendChild(playerUserResultElm)
  playersContainerElm.appendChild(playerEnemyResultElm)

  containerElm.appendChild(playersContainerElm)
  return containerElm
}

const PlayerResultCssContainer = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
})

function PlayerResult(mokepon: Mokepon, isEnemy: boolean) {
  const containerElm = document.createElement("article")
  containerElm.classList.add(PlayerResultCssContainer)
  containerElm.appendChild(MokeponDetails(mokepon, isEnemy))

  return containerElm
}

/**
 * shows done attacks for both players
 *
 * it must be called when the server
 * emits the "back:send-combat-result" event
 *
 * that event sends the done attacks for both player and enemy
 */
export function showDoneAttacks(
  playerDoneAttacks: MokeponNames[number][],
  playerPoints: number,
  enemyDoneAttacks: MokeponNames[number][],
  enemyPoints: number,
  /** "null means empate" */
  isVictory: boolean | null
) {
  const playerPointsElm = document.createElement("span")
  playerPointsElm.textContent = playerPoints + ""

  const enemyPointsElm = document.createElement("span")
  enemyPointsElm.textContent = enemyPoints + ""

  //
  playerUserResultElm.appendChild(playerPointsElm)
  playerUserResultElm.appendChild(
    DoneAttacks({
      playerDoneAttacks,
      enemyDoneAttacks,
    })
  )

  playerEnemyResultElm.appendChild(enemyPointsElm)
  playerEnemyResultElm.appendChild(
    DoneAttacks({
      playerDoneAttacks: enemyDoneAttacks,
      enemyDoneAttacks: playerDoneAttacks,
    })
  )

  availableAttacksElm.remove()
  titleElm.textContent = "Combat result"

  titleContainerElm.appendChild(FinalMessage({ isVictory }))
}
