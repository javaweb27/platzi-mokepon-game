import { randomUUID } from "crypto"
import { randomNum } from "../utils/randomNum"
import { MokeponOnline } from "./MokeponOnline"

export const mokeponsOnline = {
  items: [] as MokeponOnline[],
  get,
  add,
  remove,
  updatePosition,
  updateEnemyId,
  resetEnemyId,
  /**
   * returns:
   * "true" when the attack was the last one (limit of attacks is 5)
   *
   * "false" when the player still has available attacks
   *
   * "null" when the player wasn't found
   *
   */
  updateAttacks,
}

// function get(playerId: MokeponOnline["playerId"]) {
function get(playerId: MokeponOnline["playerId"]) {
  return mokeponsOnline.items.find(player => player.playerId === playerId)
}

function add(data: { mokeponName: string; socketId: string }) {
  const newOnlineMokepon = new MokeponOnline(
    randomUUID(),
    data.socketId,
    data.mokeponName,
    {
      x: randomNum(0, 320 - 40), // 320 is the witdh of map size
      y: randomNum(0, 240 - 40), // 240 is the height of map size
      // 40 is the height and witdh of all mokepons
    }
  )
  mokeponsOnline.items.push(newOnlineMokepon)

  return newOnlineMokepon
}

// todo: it does not removes players

function remove(socketId: MokeponOnline["socketId"]) {
  mokeponsOnline.items = mokeponsOnline.items.filter(player => {
    return socketId !== player.socketId
  })
}

/** returns "true" when the enemy is free,
 *
 * and "false" when the enemy is combating with another player.
 */
function updateEnemyId(
  playerUserId: MokeponOnline["playerId"],
  playerEnemyId: MokeponOnline["playerId"]
) {
  const playerMokepon = get(playerUserId)
  const enemyMokepon = get(playerEnemyId)

  if (!playerMokepon || !enemyMokepon) {
    console.log("\n\nplayers to combar not found")
    console.log("\nplayerMokepon id:", playerUserId)
    console.log("obj found:", playerMokepon)

    console.log("\nenemyMokepon id:", playerEnemyId)
    console.log("obj found:", enemyMokepon)
    return
  }

  if (enemyMokepon.enemyId !== null) {
    console.log("the is already in combat with " + enemyMokepon.enemyId)

    return
  }
  console.log("updating id's to combat and sending mokepons data (player and enemy)")

  playerMokepon.enemyId = playerEnemyId
  enemyMokepon.enemyId = playerUserId
  return {
    playerMokepon,
    enemyMokepon,
  }
}

function resetEnemyId(playerId: string) {
  const player = get(playerId)

  if (player) {
    player.enemyId = null
  }
}

function updatePosition(
  playerId: MokeponOnline["playerId"],
  coords: MokeponOnline["position"]
) {
  const player = get(playerId)

  if (player) {
    player.position = coords
  }
}

function updateAttacks(
  playerId: MokeponOnline["playerId"],
  attack: MokeponOnline["name"]
): boolean | null {
  const player = get(playerId)

  if (player) {
    if (player.attacks.length <= 4) {
      player.attacks.push(attack)
      console.log("attacks after adding are:", player.attacks)

      const isTheLastAttack = 5 === player.attacks.length

      return isTheLastAttack ? true : false
    } else {
      return true
    }
  } else {
    // player not found
    return null
  }
}
