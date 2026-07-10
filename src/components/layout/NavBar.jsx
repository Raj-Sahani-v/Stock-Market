import { Link } from "react-router"


export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
  <div class="container-fluid">

    
    <Link class="navbar-brand d-flex align-items-center ps-lg-5 " to="/">
      <img src="images/newlogo.jpeg" alt="brand logo" style={{width:"15%",}} class="me-2"/>
    </Link>

    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" to="/signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active " to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active " to="pricing">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="support">Support</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>
  )
} 
