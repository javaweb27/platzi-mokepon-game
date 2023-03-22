import { Mokepon } from "../entities/Mokepon"

type PlayerAllEnemies = {
  mokepons: Mokepon[]
  setMokepons: (mokepons: Mokepon[]) => void
}

export const playerAllEnemies: PlayerAllEnemies = {
  mokepons: [],
  setMokepons(mokepons) {
    this.mokepons = mokepons
  },
}
