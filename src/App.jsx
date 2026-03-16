import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import CategoryList from './components/CategoryList'
import Login from './pages/Login'
import Home from './pages/Home'
import categories from './data/categories'

function App() {
  const [view, setView] = useState('home')
  const [search, setSearch] = useState('')

  return (
    <div className="app">
      <Navbar setView={setView} />

      <main className="main-content">
        {view === 'login' ? (
          <Login />
        ) : (
          <>
            <Home />
            <SearchBar search={search} setSearch={setSearch} />
            <CategoryList categories={categories} search={search} />
          </>
        )}
      </main>
    </div>
  )
}

export default App