<template>
    <div class="cart">
        <div class="cart-header">
            <h5>Cart</h5>
            <p>Home / Cart</p>
        </div>
        <div class="section">
            <div class="container">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th><i class="material-icons tiny">delete</i></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cartItem of Object.values(groceries).slice(0, 8)" :key="cartItem.id">
                            <td></td>
                            <td> {{cartItem['name']}} </td>
                            <td> {{cartItem['cost_per_unit']}} </td>
                            <td> {{cartItem['quantity']}} </td>
                            <td> {{100.00 * cartItem['quantity']}} </td>
                            <td> <i class="material-icons tiny">close</i> </td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
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
.cart-header{
  text-align: center;
  background: #00242c;
  color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;

  h5{
    margin-top: 0;
    font-size: 32px;
  }
  p{
    font-size: 10px;
  }
}
</style>