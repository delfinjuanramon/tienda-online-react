import { useAuth } from '../context/AuthContext'

function Navbar({ setView }) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setView('home')
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Tienda Online React</h1>

        <nav className="nav-links">
          <button onClick={() => setView('home')}>Inicio</button>

          {user ? (
            <>
              <span className="user-text">Bienvenido {user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button onClick={() => setView('login')}>Login</button>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar