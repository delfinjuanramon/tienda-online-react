import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const success = login(email, password)

    if (success) {
      setMessage('Inicio de sesión correcto')
    } else {
      setMessage('Credenciales incorrectas')
    }
  }

  return (
    <section className="card">
      <h2 className="section-title">Inicio de sesión</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>

      {message && <p>{message}</p>}
    </section>
  )
}

export default Login