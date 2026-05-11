import { Header } from './components/Header'
import { GameList } from './components/GameList'
import { games } from './data/games'
import './App.css'

export default function App() {
  console.log(games)

  return (
    <main className="app">
      <Header />
      <GameList games={games}/>
    </main>
  )
}
