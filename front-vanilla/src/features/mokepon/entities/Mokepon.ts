import { MokeponNames } from "../enums/mokeponNames"
import { mokeponAssets } from "../utils/mokeponAssets"

export type MokeponParameters = ConstructorParameters<typeof Mokepon>

export class Mokepon {
  // public by default
  imgElm: HTMLImageElement
  width = 40
  height = 40
  velocity = { x: 0, y: 0 }

  constructor(
    public playerId: string,
    public name: MokeponNames[number],
    public lifepoints: number,
    public position: {
      x: number
      y: number
    }
  ) {
    this.imgElm = new Image()
    this.imgElm.src = mokeponAssets[this.name].face
  }

  private move(axis: "x" | "y", dir: 1 | -1) {
    this.velocity[axis] = 5 * dir
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }

  moveUp() {
    this.move("y", -1)
  }
  moveDown() {
    this.move("y", 1)
  }
  moveLeft() {
    this.move("x", -1)
  }
  moveRight() {
    this.move("x", 1)
  }

  stopMove() {
    this.velocity.x = 0
    this.velocity.y = 0
  }
}
