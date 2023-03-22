export interface WsServerEmits {
  "back:start-combat": (enemyMokepon: { name: string; playerId: string }) => void
  "back:send-combat-result": (combatResult: {
    isVictory: boolean | null
    playerAttacks: string[]
    playerPoints: number
    enemyAttacks: string[]
    enemyPoints: number
  }) => void
}
