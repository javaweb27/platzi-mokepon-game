import { Mokepon } from "../entities/Mokepon"
import { playerUser } from "../players"

export const isMokeponCollising = (enemyMokepon: Mokepon) => {
  const playerMokepon = playerUser.mokepon!

  const enemyTop = enemyMokepon.position.y
  const enemyBottom = enemyMokepon.position.y + enemyMokepon.height
  const enemyRight = enemyMokepon.position.x + enemyMokepon.width
  const enemyLeft = enemyMokepon.position.x

  const playerTop = playerMokepon.position.y
  const playerBottom = playerMokepon.position.y + playerMokepon.height
  const playerRight = playerMokepon.position.x + playerMokepon.width
  const playerLeft = playerMokepon.position.x

  const notCollision =
    playerBottom < enemyTop ||
    playerTop > enemyBottom ||
    playerRight < enemyLeft ||
    playerLeft > enemyRight

  return notCollision === false // there is collision
}
