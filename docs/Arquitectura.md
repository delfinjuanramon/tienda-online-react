# Arquitectura del Sistema – Tienda Online React

## Tipo de arquitectura

El sistema se desarrolló como una **Single Page Application (SPA)** utilizando React.  
La navegación entre las distintas vistas del sistema se realiza mediante el manejo de estado interno en el componente principal (`App.jsx`), sin utilizar enrutamiento avanzado.

## Estructura del proyecto

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── CategoryList.jsx
│   └── ProductList.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Login.jsx
│
├── data/
│   ├── categories.js
│   └── products.js
│
├── App.jsx
└── main.jsx
