import { css } from "@emotion/css"
import { MokeponNames } from "../../../../features/mokepon/enums/mokeponNames"
import { playerUser } from "../../../../features/mokepon/players"
import { AttackBtn } from "../../components/AttackBtn"

export function AvailableAttacks() {
  const containerElm = document.createElement("div")
  containerElm.classList.add(
    css({
      "display": "flex",
      "flexDirection": "column",
      "gap": "1rem",
      "@media (min-width: 640px)": {
        flexDirection: "row",
      },
    })
  )

  // const attacksList: MokeponNames[number][] = ["Water", "Water", "Water", "Fire", "Earth"]
  const selectedMokeponName = playerUser.mokepon!.name

  playerUser.setAttacks(selectedMokeponName)

  const availableAttacks: MokeponNames[number][] = playerUser.attacks

  availableAttacks.forEach(attack => {
    containerElm.appendChild(AttackBtn({ attack }))
  })

  return containerElm
}
