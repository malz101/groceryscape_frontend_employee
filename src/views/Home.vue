<template>
  <div class="home">
    <div class="section">
      <div class="container">
        <h5>Vegetables</h5>
        <div class="grid">
          <div class="card" v-for="grocery of Object.values(groceries).slice(0, 8)" :key="grocery.id">
            <div class="card-image">
              <img src="../assets/grocery.jpg">
            </div>
            <div class="card-content">
              <span class="card-title">{{grocery.name}}</span>
              <p>{{grocery['cost_per_unit']}}</p>
            </div>
            <div class="card-action center">
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
          <div class="card" v-for="grocery of Object.values(groceries).slice(9, 17)" :key="grocery.id">
            <div class="card-image">
              <img src="../assets/grocery.jpg">
            </div>
            <div class="card-content">
              <span class="card-title">{{grocery.name}}</span>
              <p>{{grocery['cost_per_unit']}}</p>
            </div>
            <div class="card-action center">
              <a href="#">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="quality-row">
        <div class="card">
          <div class="card-content">
            <div class="card-row">
              <span class="icon-span"><i class="material-icons">local_shipping</i></span>
              <div class="card-data">
                <span class="card-title"> Free & Next Day Delivery</span>
                <p>Islandwide free shipping</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="card-row">
              <span class="icon-span"><i class="material-icons">local_mall</i></span>
              <div class="card-data">
                <span class="card-title">100% Satisfaction Guaranteed</span>
                <p>Best quality Produce</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="card-row">
              <span class="icon-span"><i class="material-icons">local_offer</i></span>
              <div class="card-data">
                <span class="card-title">Great Daily Deals Discount</span>
                <p>Affordable produce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Home',
  
  async created(){
    await this.getGroceries();
  },
  methods:{
    ...mapActions(['getGroceries'])
  },
  computed:{
    ...mapGetters(['groceries'])
  }
}
</script>

<style lang="scss" scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(4, auto);
  .card{
    width: 200px;
    padding: 16px;
    box-sizing: content-box;
    .card-image{
      width: 200px;
      height: 130px;
      img:hover{
        transform: scale(1.1);
      }
    }
    .card-title{
      color: orange;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
    .card-content{
      text-align: center;
      p{
        font-weight: bold;
        max-height: 80px;
        font-size: 14px;
        overflow: hidden;
      }
    }
  }
}

.quality-row{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap ;

  .card-container{
    width: 70%;
  }

  .card{
    box-shadow: none;
    .card-row{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      color:  rgb(10, 71, 71);
      
      .icon-span{
        border: 1px solid rgb(10, 71, 71);;
        border-radius: 50%;
        margin-right: 8px;
      }

      i{
        font-size: 32px;
        padding: 16px;
      }
    }
    .card-data{
      display: inline;
      .card-title{
        font-size: 16px;
      }
      p{
        font-size: 12px;
      }
    }
  }
}

@media screen and (max-width:800px) {
  .grid{
    grid-template-columns: repeat(2, auto) ;
  }
}

@media screen and (max-width:400px) {
  .grid{
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }
}

</style>
