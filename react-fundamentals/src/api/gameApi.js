import { games } from '../data/games'

function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
   const timerId=setTimeout(() => {
    resolve()
   }, ms)

   if (!signal) {
    return
   }

   if (signal.aborted) {
    clearTimeout(timerId)
    reject(new DOMException('Request aborted', 'AbortError'))
    return
   }

   signal.addEventListener(
    'abort',
    () => {
      clearTimeout(timerId)
      reject(new DOMException('Request aborted', 'AbortError'))
    },
    {once: true}
   )
  })
}

export async function getGames({signal}) {
  await sleep(500, signal)

  return games
}
