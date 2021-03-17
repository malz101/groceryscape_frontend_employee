<template>
    <div>
        <div class="header-bar">
            <span id="brand"><img src="../assets/default.svg" alt="" srcset=""></span>
            <div class="search-div">
                <input type="search" name="" id="" placeholder="Enter Search Here...">
                <a href="#" class="btn">Search</a>
            </div>
            <span class="cart">
                <a href="#" class="btn-small"><i class="material-icons tiny">add_shopping_cart</i></a>
                My Cart
            </span>
        </div>
        <div class="container">
            <nav class="nav-wrapper">
                <div class="toolbar">
                <router-link to="/" class="brand-logo left right-padding"> 
                    <span>Home</span>
                </router-link>
                    <ul id="nav-mobile" class="right">
                        <li><router-link to="/">Shop</router-link></li>
                        <li><router-link to="#">Categories</router-link></li>
                        <li><router-link to="#"> FAQ </router-link></li>
                        <li><router-link to="#" id="admin">Contact</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.header-bar{
    width: 100%;
    background: #00242c;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
    #brand{
        width: 100px;
        font-size: 32px;
        font-weight: bold;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
    }
    .search-div{
        display: flex;
        align-items: flex-start;
        a{  
            display: flex;
            align-items: center;
            box-shadow: none;
            height: 50px;
            background: #81e291;
            color: #00242c;
        }
        input{
            width: 500px;
            background: white;
            padding: 16px;
            box-sizing: border-box;
            height: 50px;
        }
    }
    .cart{
        display: flex;
        align-items: center;
        font-weight: bold;
        color: white;
        a{
            margin-right: 8px;
            background: white;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            i{
                color: #000;
            }
        }
    }
}

nav {
  padding-left: 16px;
  padding-right: 16px;
  background: white;
  box-shadow: none;
  a{
      color: black;
  }

}

@media screen and (max-width:800px) {
    .header-bar{
        justify-content: space-evenly;
        .search-div{
            margin-bottom: 40px;
            order: 3;
            input{
                width: 200px;
                height: 30px;
                padding: 8px;
            }
            a{
                height: 30px;
            }
        }
    }
    
}
</style>