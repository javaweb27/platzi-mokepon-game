import { canvasElm } from "../../features/canvas"
import { gameLoop } from "../../features/game"
import { playerUser } from "../../features/mokepon/players"
import { MovementBtn } from "./components/MovementBtn"
import { Title } from "./components/Title"
import * as CombatMapCss from "./CombatMap.css"
import { css } from "@emotion/css"

export const CombatMap = () => {
  const container = document.createElement("section")

  container.classList.add(CombatMapCss.section)

  container.appendChild(Title)
  container.appendChild(canvasElm)

  container.appendChild(MovementControls())

  window.addEventListener("keydown", evt => {
    switch (evt.key) {
      case "ArrowUp":
        playerUser.mokepon!.moveUp()
        break
      case "ArrowDown":
        playerUser.mokepon!.moveDown()
        break
      case "ArrowLeft":
        playerUser.mokepon!.moveLeft()
        break
      case "ArrowRight":
        playerUser.mokepon!.moveRight()
        break

      default:
        break
    }
  })

  window.addEventListener("keyup", () => {
    playerUser.mokepon!.stopMove()
  })

  gameLoop.start(playerUser.mokepon!)

  return container
}

function MovementControls() {
  const containerElm = document.createElement("div")
  containerElm.classList.add(
    css({
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: ".46rem",
    })
  )

  /**
   * null is for adding an empty element instead of a movement button
   * so empty elements can fill empty spaces (left and right for Up button)
   *
   * the buttons should be ordered with css grid like this:
   * (empty)  Up  (empty)
   *  left   down  right
   *
   */
  const buttonsData: ({
    text: string
    moveTo: "moveUp" | "moveDown" | "moveLeft" | "moveRight"
  } | null)[] = [
    null,
    {
      text: "Up",
      moveTo: "moveUp",
    },
    null,
    {
      text: "Left",
      moveTo: "moveLeft",
    },
    {
      text: "down",
      moveTo: "moveDown",
    },
    {
      text: "Right",
      moveTo: "moveRight",
    },
  ]

  for (const data of buttonsData) {
    if (data === null) {
      const emptyElm = document.createElement("span")
      containerElm.appendChild(emptyElm)
      continue
    }

    const moveBtnElm = MovementBtn({ text: data.text })

    moveBtnElm.addEventListener("mousedown", () => {
      playerUser.mokepon![data.moveTo]()
    })

    moveBtnElm.addEventListener("mouseup", () => {
      playerUser.mokepon!.stopMove()
    })

    containerElm.appendChild(moveBtnElm)
  }

  return containerElm
}
