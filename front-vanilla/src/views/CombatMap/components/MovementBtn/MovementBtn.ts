import { btnCss } from "./MovementBtn.css"

interface MovementBtnProps {
  text: string
}

export const MovementBtn = ({ text }: MovementBtnProps) => {
  const btnElm = document.createElement("button")

  btnElm.classList.add(btnCss)
  btnElm.textContent = text

  return btnElm
}
