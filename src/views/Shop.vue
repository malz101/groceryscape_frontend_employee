<template>
    <div class="shop">
        <div class="container">
            <span class="heading"><i class="material-icons tiny">home</i> <strong> <router-link to="/">Home</router-link> </strong>/ Shop </span>
            <div class="section">
                <div class="grid">
                    <div class="categories">
                        <span class="categories-title">Product Categories</span>
                        <ul class="categories-list">
                            <li><a>Vegetables</a></li>
                            <li><a>Fruit</a></li>
                            <li><a>Meat</a></li>
                        </ul>
                    </div>
                    <div class="product">
                        <span class="product-title">Quality & Freshness Guaranteed! Good Health.</span>
                        <div class="product-grid">
                            <div class="card" v-for="i in [1,2,3,4,5,6]" :key="i">
                                <div class="card-image">
                                    <img src="../assets/grocery.jpg">
                                </div>
                                <div class="card-content">
                                    <span class="card-title">Organic Sweet Corn</span>
                                </div>
                                <div class="card-action">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.shop{
    .heading{
        font-size: 12px;
        display: flex;
        align-items: flex-start;
        i{
            margin-right: 4px;
        }
        strong{
            font-weight: bold;
            margin-right: 4px;
            a{
                color: black;
            }
            a:hover{
                text-decoration: underline;
            }
        }
    }

    .grid{
        display: grid;
        grid-template-columns: 150px repeat(5, auto);       
        gap: 16px;

        .categories{
            grid-column: 1;
            padding-left: 8px;
            box-shadow: 1px 1px 1px 1px #ececec, -1px -1px 1px 1px #ececec;
            
            .categories-title{
                padding-bottom: 8px;
                height: 40px;
                border-bottom:1px solid black;
                display: inline-flex;
                align-items: flex-end;
                font-size: 14px;
                font-weight: bold;
            }
            
            .categories-list{
                a{
                    color: gray;
                    font-size: 12px;
                    cursor: pointer;
                }
                a:hover{
                    text-decoration: underline;
                }
            }
        }

        .product{
            grid-column: 2 / span 5;

            .product-title{
                margin-bottom: 12px;
                display: flex;
                background: #00242c;
                color: white;
                height: 40px;
                align-items: center;
                padding-left: 8px;
                font-weight: bold;
            }
            .product-grid{
                display: grid;
                gap: 24px;
                grid-template-columns: repeat(3, auto);

                .card{
                    text-align: center;
                    .card-title{
                        font-size: 14px;
                    }

                    .card-action a{
                        font-size: 12px;
                    }
                }
            }
        }
    }
}

</style>