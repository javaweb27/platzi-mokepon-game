import * as MokeponCardCss from "./MokeponCard.css"

interface MokeponCardProps {
  imgUrl: string
  name: string
}

export const MokeponCard = ({ imgUrl, name }: MokeponCardProps) => {
  const containerElm = document.createElement("article")

  containerElm.classList.add(MokeponCardCss.card)

  containerElm.innerHTML = /* HTML */ `
    <input type="radio" name=${MokeponCard.name} id=${name} />
    <label for=${name}>
      <img src=${imgUrl} alt=${name} />
      <p>${name}</p>
    </label>
  `

  return containerElm
}

/** selector for inputs */
export const MokeponCardElmSelector = `input[name=${MokeponCard.name}]`
