import React from 'react'
import "./style.css"
import CartWidget from '../CartWidget/CartWidget'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg barra">
          <section className='abc'>  
  <div class="container-fluid barra-order">
    <div className='onePage'>
      <div className='a'>
      <a class="navbar-brand" href="#"><img className='picture' src='../afa_logo.svg.png'></img></a>
      </div>
      <div className='b'>
      <form class="flexform" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-info" type="submit">Buscar</button>
      </form>
      </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className='barra2'>
    <div  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Seleccion Femenina</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Seleccion Masculina</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Camisetas</a></li>
            <li><a class="dropdown-item" href="#">Buzos y camperas</a></li>
            <li><a class="dropdown-item" href="#">Pantalones</a></li>
            <li><a class="dropdown-item" href="#">Accesorios</a></li>

          </ul>
        </li>
        <li class="nav-item">
          <CartWidget/>
        </li>
      </ul>
      
    </div>
    </div>
  </div>
  </section>
</nav>
    </div>
  )
}
