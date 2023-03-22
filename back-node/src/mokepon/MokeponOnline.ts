export class MokeponOnline {
  enemyId: string | null = null

  /** done attack */
  attacks: string[] = []

  constructor(
    public playerId: string,
    public socketId: string,
    public name: string,
    public position: { x: number; y: number }
  ) {}
}
