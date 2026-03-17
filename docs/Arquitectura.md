# Arquitectura del Sistema – Tienda Online React

## Tipo de arquitectura

El sistema se desarrolló como una **Single Page Application (SPA)** utilizando React.  
La navegación entre las distintas vistas del sistema se realiza mediante el manejo de estado interno en el componente principal (`App.jsx`), sin utilizar enrutamiento avanzado.

## Estructura del proyecto

src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── SearchBar.jsx
 │    ├── CategoryList.jsx
 │    └── ProductList.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    └── Login.jsx
 │
 ├── data/
 │    ├── categories.js
 │    └── products.js
 │
 ├── App.jsx
 └── main.jsx

## Funcionamiento general

- El usuario puede iniciar sesión de forma simulada.
- Se permite la navegación básica entre vistas mediante estado.
- Se muestran categorías y productos utilizando datos simulados.
- La búsqueda permite filtrar productos dinámicamente.
- La selección de categorías permite explorar el catálogo.

## Alcance de la primera fase

La primera fase del proyecto tiene como objetivo validar:

- La estructura base del sistema.
- La navegación principal.
- La exploración inicial del catálogo.
- La evidencia técnica del desarrollo mediante el repositorio GitHub.

Las funcionalidades avanzadas como carrito completo, integración con backend, pagos reales o persistencia de datos quedan fuera del alcance de esta fase del proyecto.
