function Navbar({ setView }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Tienda Online React</h1>

        <nav className="nav-links">
          <button onClick={() => setView('home')}>Inicio</button>
          <button onClick={() => setView('login')}>Login</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar