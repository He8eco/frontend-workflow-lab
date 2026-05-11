import { Header } from './components/Header'
import { games } from './data/games'
import './App.css'

export default function App() {
  console.log(games)

  return (
    <main className="app">
      <Header />
    </main>
  )
}
