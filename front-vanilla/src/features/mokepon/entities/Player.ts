import { mokeponNames, MokeponNames } from "../enums/mokeponNames"
import { Mokepon } from "./Mokepon"

export class Player {
  mokepon: Mokepon | null = null
  attacks: MokeponNames[number][] = []

  setMokepon(mokepon: Mokepon) {
    this.mokepon = mokepon
  }

  setAttacks(mokeponName: MokeponNames[number] | null) {
    if (mokeponName === null) {
      this.attacks = []
      return
    }

    const mainAttack = mokeponNames.find(name => name === mokeponName)!

    const otherAttacks = mokeponNames.filter(name => name !== mokeponName)

    const attacks = [mainAttack, mainAttack, mainAttack, ...otherAttacks]
    // attacks.length should be 5

    this.attacks = attacks
  }
}
