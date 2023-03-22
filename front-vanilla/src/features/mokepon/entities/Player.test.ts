import { Mokepon } from "./Mokepon"
import { Player } from "./Player"

let player: Player

beforeEach(() => {
  player = new Player()
})

test("mokepon attr is null initially", () => {
  expect(player.mokepon).toBeNull()
})

test("setMokepon method modifies the mokepon attr to a mokepon class", () => {
  player.setMokepon(new Mokepon("some-player-id", "Water", 5, { x: 0, y: 0 }))
  expect(player.mokepon).toBeInstanceOf(Mokepon)
})

test("attacks attr is an empty array initially", () => {
  expect(player.attacks).toEqual([])
})

test("setAttacks method modifies the attacks attr to an array of 5 values", () => {
  player.setAttacks("Water")
  expect(player.attacks.length).toBe(5)
})
