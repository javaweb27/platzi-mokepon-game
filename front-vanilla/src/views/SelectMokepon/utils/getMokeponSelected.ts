import { MokeponNames } from "../../../features/mokepon/enums/mokeponNames"
import { MokeponCardElmSelector } from "../components/MokeponCard"

export function getNameOfMokeponSelected(): MokeponNames[number] {
  const mokeponInputElms =
    document.querySelectorAll<HTMLInputElement>(MokeponCardElmSelector)

  const inputCheckedElm = Array.from(mokeponInputElms).find(({ checked }) => {
    return checked
  })

  const mokeponName = inputCheckedElm!.id as MokeponNames[number]

  return mokeponName
}
