import { games } from "../data/games";

function sleep(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}

export async function getGame() {
    await sleep(500)

    return games
}