<template>
  <div class="home">

    <!-- Modal Structure -->
    <div id="not-logged-in-modal" class="modal">
      <div class="modal-content">
        <h6>You are not logged in.</h6>
        <p>Register or Log In to continue.</p>
      </div>
      <div class="modal-footer">
        <a href="/login" class="modal-close btn bg-primary">Login</a>
        <a href="#" class="modal-close btn-flat">Close</a>
      </div>
    </div>
    <div class="section" v-for="category of Object.keys(categories)" :key="category">
      <div class="container">
        <h5>{{category}}</h5>
        <div class="grid">
          <div class="card" v-for="grocery of categories[category].slice(0, 8)" :key="grocery.id">
            <div class="card-image">
              <img src="../assets/grocery.jpg">
            </div>
            <div class="card-content">
              <span class="card-title">{{grocery.name}}</span>
              <p>{{grocery['cost_per_unit']}}</p>
            </div>
            <div class="card-action">
              <a @click="addItemToCart(grocery.id)" class="add-to-cart-btn btn-small btn-flat">Add to Cart</a>
              <star-rating :clearable="true" :rating="0" :show-rating="false" :star-size="20" :animate="true" @rating-selected ="setRating($event, grocery.id)"></star-rating> 
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
                <span class="card-title"> Free & Next y Delivery</span>
                <p>Islandwide free shipping</p>
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
    if(this.isLoggedIn){
      await this.getCart();
    }
  },
  mounted(){
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  },
  methods:{
    ...mapActions(['getGroceries', 'addToCart', 'getCart', 'rateGrocery']),
    async addItemToCart(id){
      if(this.isLoggedIn){
        const form = new FormData();
        form.set('item_id', id);
        form.set('quantity', 1)
        await this.addToCart(form);
      }
      else{
        var notLoggedInModal = document.querySelector('#not-logged-in-modal');
        let instance = M.Modal.getInstance(notLoggedInModal);

        instance.open();
      }
      
    },
    async setRating(rating, groceryId){
      let form = new FormData();
      form.set('item_id', groceryId);
      form.set('rating', rating);
      await this.rateGrocery(form);
    }
  },
  computed:{
    ...mapGetters(['groceries','isLoggedIn','categories'])
  }
}
</script>

<style lang="scss" scoped>
.bg-primary{
  background: var(--bg-primary);
}

.grid{
  display: grid;
  grid-template-columns: repeat(4, auto);
  .card{
    width: 200px;
    padding: 16px;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    .card-action{
      display: flex;
      flex-direction: column;
      align-items: center;
      .add-to-cart-btn{
        color: orange;
      }
      .add-to-cart-btn:hover{
        background: orange;
        color: white;
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
