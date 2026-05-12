import { games } from '../data/games'

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function getGames() {
  await sleep(500)

  return games
}
