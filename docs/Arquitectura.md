# Arquitectura del Sistema – Tienda Online React

## Tipo de arquitectura

La aplicación está desarrollada bajo una arquitectura **SPA (Single Page Application)** utilizando React y Vite.

El sistema se organiza en:

* Componentes reutilizables
* Páginas principales
* Datos simulados
* Enrutamiento mediante React Router

## Estructura del proyecto

```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── SearchBar.jsx
 │    └── CategoryList.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    └── Login.jsx
 │
 ├── data/
 │    └── categories.js
 │
 ├── App.jsx
 └── main.jsx
```

## Flujo de navegación

Usuario → Navbar → Router → Página → Componentes → Datos

## Escalabilidad futura

El sistema permitirá integrar:

* API REST
* Base de datos
* Autenticación real
* Carrito persistente
* Panel administrador
