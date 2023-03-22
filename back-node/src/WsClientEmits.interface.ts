import { MokeponOnline } from "./mokepon/MokeponOnline"

export interface WsClientEmits {
  "front:start-combat": (playerId: string, enemyId: string) => void
  "front:join-game": (
    mokeponName: string,
    callback: (playerMokepon: Pick<MokeponOnline, "playerId" | "position">) => void
  ) => void
  "front:send-position": (
    playerId: string,
    position: { x: number; y: number },
    callback: (enemyPlayers: MokeponOnline[]) => void
  ) => void
  "front:send-attack": (playerId: string, attack: string) => void
}
