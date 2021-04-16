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
                            <th class="empty-cart"> <a @click="clearCart" class="btn-small"><i class="material-icons tiny">delete</i></a> </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody v-if="Object.values(cart).length>0">
                        <tr v-for="cartItem of Object.values(cart)" :key="cartItem['grocery_id']">
                            <td></td>
                            <td> {{cartItem['name']}} </td>
                            <td> {{cartItem['cost']}} </td>
                            <td> {{cartItem['quantity']}} </td>
                            <td> {{100.00 * cartItem['quantity']}} </td>
                            <td class="empty-cart"> <a @click="removeFromCart(cartItem['grocery_id'])" class="btn-small"><i class="material-icons tiny">close</i></a> </td>
                            <td> </td>
                        </tr>
                    </tbody>
                    <p v-else>Cart Empty</p>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    async created(){
        await this.getCart();
    },
    methods:{
        ...mapActions(['getCart', 'emptyCart', 'removeItemFromCart']),
        async clearCart(){
            await this.emptyCart();
        },
        async removeFromCart(groceryId){
            const form = new FormData();
            form.set('grocery_id', groceryId);
            await this.removeItemFromCart(form);
        }
    },
    computed:{
        ...mapGetters(['cart'])
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
.empty-cart{
    .btn-small{
        background: var(--bg-primary);
        border-radius: 50%;
        padding-right: 0.5em;
        padding-left: 0.5em;
        box-shadow: none;
    }   
    .btn-small:hover{
        opacity: 0.5;
    }
}
</style>