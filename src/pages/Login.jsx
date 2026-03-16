function Login() {
  return (
    <section className="card">
      <h2 className="section-title">Inicio de sesión</h2>

      <form className="login-form">
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </section>
  )
}

export default Login