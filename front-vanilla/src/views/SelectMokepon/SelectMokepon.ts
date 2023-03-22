import { ContinueBtn } from "./components/ContinueBtn"
import { Title } from "./components/Title"
import { SelectionContainer } from "./containers/SelectionContainer"
import * as SelectMokeponCss from "./SelectMokepon.css"

export const SelectMokepon = () => {
  const sectionElm = document.createElement("section")

  sectionElm.classList.add(SelectMokeponCss.section)

  sectionElm.appendChild(Title)

  sectionElm.appendChild(SelectionContainer())

  sectionElm.appendChild(ContinueBtn())

  return sectionElm
}
