import { socket, WsClientEmits } from "../../../socket"
import { Mokepon } from "../entities/Mokepon"

/** emits to socketio server
 *
 * sends mokepon name and gets the playerId as a response
 * */
export const joinGame = (mokeponName: string) => {
  return new Promise<Pick<Mokepon, "playerId" | "position">>((resolve, _reject) => {
    socket.emit("front:join-game", mokeponName, ({ playerId, position }) => {
      resolve({ playerId, position })
    })
  })
}

/** emits to socketio server
 *
 * sends the playerId of the PLAYER
 * and the playerId of the ENEMY with which it collided
 */

export const startCombat = (
  playerId: Mokepon["playerId"],
  enemyId: Mokepon["playerId"]
) => {
  socket.emit("front:start-combat", playerId, enemyId)
}

/** emits to socketio server
 *
 * sends the PLAYER's playerId and position,
 * and gets the enemy players as a response
 * */
export const sendPosition = (
  ...args: [playerId: string, position: Mokepon["position"]]
) => {
  type PlayerOnline = Parameters<
    Parameters<WsClientEmits["front:send-position"]>[2]
  >[0][number]

  return new Promise<PlayerOnline[]>((resolve, _reject) => {
    socket.emit("front:send-position", ...args, enemyPlayers => {
      resolve(enemyPlayers)
    })
  })
}

/** emits to socketio server
 *
 * sends an attack that the player selected
 * */
export const sendAttack = (...args: [playerId: string, attack: Mokepon["name"]]) => {
  socket.emit("front:send-attack", ...args)
}
