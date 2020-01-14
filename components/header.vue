<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">
          <img src="~static/images/logoas.jpg" style="width: 40%" alt />
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" id="home">
                Home
                <span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link" id="about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/themes" class="nav-link" id="categories">Categories</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/blog" class="nav-link" id="blog">Blog</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/contact" id="contact" class="nav-link">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-dark {
  background-color: white !important;
}

.navbar {
  width: 100% !important;
  position: fixed;
  z-index: 1000;
  box-shadow: 0px 9px 10px 0px #00000033;
}

.navbar-dark .navbar-nav .nav-link {
  color: black;
  font-weight: 400;
}

.navbar-dark:hover .navbar-nav:hover .nav-link:hover {
  color: #ffce10 !important;
}

.navbar-dark .navbar-toggler-icon {
  background-image: url(~static/images/menu.png);
}

.nav-link:focus {
  color: #f7a818 !important;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem !important;
  }
}
</style>
