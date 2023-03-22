import { mokeponNames } from "../../../../features/mokepon/enums/mokeponNames"
import { mokeponAssets } from "../../../../features/mokepon/utils/mokeponAssets"
import { MokeponCard } from "../../components/MokeponCard"
import { containerCss } from "./SelectionContainer.css"

export const SelectionContainer = () => {
  const containerElm = document.createElement("div")
  containerElm.classList.add(containerCss)

  for (const name of mokeponNames) {
    const cardElm = MokeponCard({ imgUrl: mokeponAssets[name].attack, name })

    containerElm.appendChild(cardElm)
  }

  return containerElm
}
