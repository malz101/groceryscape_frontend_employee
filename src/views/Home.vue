<template>
  <div class="home">
    <div class="section">
      <div class="container">
        <h5>Top Savers Today</h5>
        <div class="grid">
          <div class="card" v-for="i in [1,2,3]" :key="i">
            <div class="card-image">
              <img src="../assets/grocery.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h5>Fruits</h5>
        <div class="grid">
          <div class="card" v-for="i in [1,2,3]" :key="i">
            <div class="card-image">
              <img src="../assets/grocery.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>

.grid{
  display: grid;
  grid-template-columns: repeat(5, auto);
  .card{
    width: 300px;
    height: 400px;
    .card-title{
      color: black;
    }
  }
}
</style>
