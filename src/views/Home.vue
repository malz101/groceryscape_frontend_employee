<template>
  <div class="home">
    <div class="section">
      <div class="container">
        <h5>Top Savers Today</h5>
        <div class="grid">
          <div class="card" v-for="i in [1,2,3]" :key="i">
            <div class="card-image">
              <img src="../assets/grocery.jpg">
            </div>
            <div class="card-content">
              <span class="card-title">Card Title</span>
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
            </div>
            <div class="card-content">
              <span class="card-title">Card Title</span>
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
    <div class="section footer">
      <div class="footer-grid">
        <div class="grid-column">
          <h5>Contact Us</h5>
          <p> <a>  <i class="material-icons tiny">call</i>+876123456789 </a> </p>
          <p> <a>  <i class="material-icons tiny">email</i>groceryscape@gmail.com </a> </p>
          <p> <a>  <i class="material-icons tiny">language</i>www.groceryscape.com </a> </p>
        </div>
        <div class="grid-column">
          <h5>Top Parishes</h5>
          <p> <a>  St. Andrew </a> </p>
          <p> <a> St. Catherine </a> </p>
          <p> <a> St.James </a> </p>
        </div>
        <div class="grid-column">
          <h5>Catergories</h5>
          <p> <a> Vegetables </a> </p>
          <p> <a> Staples </a> </p>
          <p> <a> Meat and Poultry </a> </p>
        </div>
        <div class="grid-column">
          <h5>About Us</h5>
          <p> <a> Company Information </a> </p>
          <p> <a> Store Location </a> </p>
          <p> <a> Copyright </a> </p>
        </div>  
      </div>
      <h6 class="copyright">
        Copyright &copy; 2021. All Rights Reserved
      </h6>
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
    width: 200px;
    .card-image{
      width: 200px;
      height: 130px;
    }
    .card-title{
      color: black;
      font-size: 18px;
    }
    .card-content{
      p{
        height: 80px;
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

.footer{
  background: rgb(226, 226, 226);
  .footer-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .grid-column{
      margin: 16px;
    }

    a{
      cursor: pointer;
      color: #00242c;
    }
    a:hover{
      text-decoration: underline;
    }
  }

  .copyright{
    text-align: center;
    font-size: 12px;
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
