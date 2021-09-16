<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Logo</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="customgrid">customgrid</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="vuegrid">vue grid</router-link>
        </li>
      </ul>
      <span class="navbar-text">Grid test</span>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
    .navbar {
        z-index: 9;
        height: 60px;
    }
</style>
