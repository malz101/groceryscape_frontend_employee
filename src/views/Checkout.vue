<template>
  <div class="checkout">
    <div class="checkout-header">
      <h5>Checkout</h5>
      <p>Home / Checkout</p>
    </div>
    <div class="section">
        <div class="container billing-container">
            <h5>Billing Information</h5>
            <div class="billing-grid">
                <div class="column-1">
                    <form action="">
                        <div>
                            <label for="first_name">First Name</label>
                            <input type="text" name="first_name" id="first_name" v-model="firstName" required>
                        </div>
                        <div>
                            <label for="last_name">Last Name</label>
                            <input type="text" name="last_name" id="last_name" v-model="lastName" required>
                        </div>
                        <div>
                            <label for="street_name">Street address</label>
                            <input type="text" name="street_name" id="street_name" v-model="streetAddress" required>
                        </div>
                        <div>
                            <label for="town">Town</label>
                            <input type="text" name="town" id="town" v-model="town" required>
                        </div>
                        <div>
                            <label for="parish">Parish</label>
                            <input type="text" name="parish" id="parish" v-model="parish" required>
                        </div>
                        <div>
                            <label for="phone">Phone</label>
                            <input type="text" name="phone" id="phone" v-model="phone" required>
                        </div>
                        <div>
                            <label for="email">Email address</label>
                            <input type="text" name="email" id="email" v-model="email" required>
                        </div>
                        <div>
                            <label for="deliveryDate">Delivery date (optional)</label>
                            <input type="text" name="deliveryDate" id="deliveryDate" v-model="deliveryDate" required>
                        </div>
                        <div>
                            <select name="deliveryTime" id="deliveryTime">
                                <option value="" disabled selected>Choose delivery time</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="column-2">
                    <label>Order Notes</label>
                    <textarea name="notes" id="notes" v-model="notes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="container order-container">
            <h5>Your Order</h5>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cartItem of Object.values(cart)" :key="cartItem['grocery_id']">
                        <td>{{cartItem['name']}} x{{cartItem['quantity']}}</td>
                        <td>$9.99</td>
                    </tr>
                    <tr>
                        <th>Subtotal</th>
                        <td>$9.99</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>$9.99</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p>
                    <label for="direct">
                        <input type="radio" name="payment" id="direct" value="direct" v-model="paymentMethod">
                        <span>Direct Bank Transfer</span>
                    </label>
                </p>
                <p>
                    <label for="cash">
                        <input type="radio" name="payment" id="cash" value="cash" v-model="paymentMethod">
                        <span>Cash on Delivery</span>
                    </label>
                </p>
            </div>
            <a @click="placeOrder" class="btn primary-bg-color">Place Order</a>
        </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters} from 'vuex';

export default {
    data(){
        return{
            firstName:'',
            lastName:'',
            country:'',
            streetAddress:'',
            town:'',
            parish:'',
            phone:'',
            email:'',
            deliveryTime:'',
            deliveryDate:null,
            notes:'',
            paymentMethod:'direct'
        }
    },
    async created(){
        await this.getCart();
        await this.getCustomer();

        this.firstName = this.customer['first_name'];
        this.lastName = this.customer['last_name'];
        this.email = this.customer['email'];
        this.phone = this.customer['telephone'];
        this.parish = this.customer['parish'];
        this.town = this.customer['town'];
        this.country = 'Jamaica';
    },
    methods:{
        ...mapActions(['getCart', 'getCustomer']),
        placeOrder(){

        }
    },
    computed:{
        ...mapGetters(['cart', 'customer'])
    }
}
</script>

<style lang="scss" scoped>

.primary-bg-color{
    background: var(--bg-primary);
}

.checkout-header{
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

.billing-container, .order-container{
    padding: 30px 24px;
    border: 2px solid #f0f0f0;
}

.billing-grid{
    display: flex;
    gap: 20px;

    label{
        font-size: 1em;
    }

    form{
        input[type=text]{
            border: 1px solid #9e9e9e;
            border-radius: 2px;
            box-sizing: border-box;
            padding-left: 8px;
        }
        #deliveryTime{
            display: block;
        }
    }
    form > *{
        margin-bottom: 20px;
    }
}

.billing-grid > *{
    width: 100%;
}

</style>