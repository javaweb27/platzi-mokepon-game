import { MokeponNames } from "../../../../features/mokepon/enums/mokeponNames"
import * as DoneAttacksCss from "./DoneAttacks.css"

interface DoneAttacksProps {
  playerDoneAttacks: MokeponNames[number][]
  enemyDoneAttacks: MokeponNames[number][]
}

export const DoneAttacks = ({
  playerDoneAttacks,
  enemyDoneAttacks,
}: DoneAttacksProps) => {
  const containerElm = document.createElement("ul")

  for (const index in playerDoneAttacks) {
    const playerAttack = playerDoneAttacks[index]
    const enemyAttack = enemyDoneAttacks[index]

    const isWinAttack = processOneAttack(playerAttack, enemyAttack)

    const attackElm = document.createElement("li")
    attackElm.classList.add(DoneAttacksCss.attack)

    if (isWinAttack) {
      attackElm.classList.add(DoneAttacksCss.winAttack)
    }

    attackElm.textContent = playerAttack

    containerElm.appendChild(attackElm)
  }

  return containerElm
}

function processOneAttack(
  playerAttack: MokeponNames[number],
  enemyAttack: MokeponNames[number]
): boolean | null {
  const attacksList: [win: MokeponNames[number], lose: MokeponNames[number]][] = [
    ["Earth", "Water"],
    ["Fire", "Earth"],
    ["Water", "Fire"],
  ]

  if (playerAttack === enemyAttack) {
    return null
  }

  for (const [win, lose] of attacksList) {
    if (playerAttack === win && enemyAttack === lose) {
      return true
    }
  }

  return false
}
