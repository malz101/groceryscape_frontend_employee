<template>
    <div class="dashboard">
        <div class="col s12 m7 container">
            <h3 class="header">Dashboard</h3>
            <div class="order-types">
                <div class="card order-card pending">
                    <a href="/?status=pending">
                        <div class="card-stacked">
                            <div class="card-content title-and-icon">
                                <div class="title">
                                    <p>Order Pending</p>
                                    <span>{{orders.filter((order)=>order['status'].toLowerCase()=='pending').length}}</span>
                                </div>
                                <div class="icon">
                                    <i class="material-icons">loop</i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card order-card checked-out">
                    <a href="/?status=checked out">
                        <div class="card-stacked">
                            <div class="card-content title-and-icon">
                                <div class="tite">
                                    <p>Order Checkout</p>
                                    <span>{{orders.filter((order)=>order['status'].toLowerCase()=='checked out').length}}</span>
                                </div>
                                <div class="icon">
                                    <i class="material-icons">local_shipping</i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card order-card delivered">
                    <a href="/?status=delivered">
                        <div class="card-stacked">
                            <div class="card-content title-and-icon">
                                <div class="title">
                                    <p>Order Delivered</p>
                                    <span>{{orders.filter((order)=>order['status'].toLowerCase()=='delivered').length}}</span>
                                </div>
                                <div class="icon">
                                    <i class="material-icons">check_circle</i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="card order-card cancelled">
                    <a href="/?status=cancelled">
                        <div class="card-stacked">
                            <div class="card-content title-and-icon">
                                <div class="title">
                                    <p>Order Cancel</p>
                                    <span>{{orders.filter((order)=>order['status'].toLowerCase()=='cancelled').length}}</span>
                                </div>
                                <div class="icon">
                                    <i class="material-icons">cancel</i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="section vld-parent">
                <div class="latest-heading">
                    <h4>Latest Orders</h4>
                    <a href="/" class="waves-effect waves-light bg-primary view-all-btn btn-small">View All</a>
                </div>
                <table v-if="!isLoading && orders.length>0" class="highlight responsive-table order-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Billing Name</th>
                            <th>Order Date</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                            <th>Order Status</th>
                            <th>Payment Method</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody v-if="orders.length>0">
                        <tr v-for="order in localOrders" :key="order['order_id']">
                            <td>{{order['order_id']}}</td>
                            <td>{{order['customer']}}</td>
                            <td>{{order['order_date'] | formatDate }}</td>
                            <td>{{order['formatted_delivery_date'] | formatDate}}</td>
                            <td class="total">${{ Number.parseFloat(order['total']).toFixed(2) }}</td>
                            <td> <span data-badge-caption="" :class="{'pending':order['status'].toLowerCase()=='pending', 'cancelled':order['status'].toLowerCase()=='cancelled','checked-out':order['status'].toLowerCase()=='checked out', 'delivered':order['status'].toLowerCase()=='delivered' }" class="badge">{{order['status'].toLowerCase()}}</span> </td>
                            <td>{{order['payment_type']}}</td>
                            <td>
                                <select class="browser-default order-select" name="orderStatus" @change="onStatusChange($event, order['order_id'])">
                                    <option :selected="order['status'].toLowerCase()=='cancelled'" value="cancelled">Cancel</option>
                                    <option :selected="order['status'].toLowerCase()=='pending'" value="pending">Pending</option>
                                    <option :selected="order['status'].toLowerCase()=='checked out'" value="checked out">Checkout</option>
                                    <option :selected="order['status'].toLowerCase()=='delivered'" value="delivered">Delivered</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-else-if="!isLoading && orders.length==0" class="container no-orders">
                    No Orders Received
                </div>
                <div v-else class="container loading">
                    <loading :active.sync="isLoading" :is-full-page="false" :width="50" :height="50" :color="'#080'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return{
            isLoading:true,
            statusChange:'',
            localOrders:[]
        }
    },
    async created(){
        if(this.isLoggedIn){
            await this.getOrders();
            this.localOrders = this.orders;
            let result = [];
            if('status' in this.$route.query){
                for(let order of this.orders){
                    if(order['status']==this.$route.query['status']){
                        result.push(order);
                    }
                }
                this.localOrders = result;
            }
        }
        else{
            M.toast({html: 'Please log in first'});
        }
        this.isLoading =false;
    },
    computed:{
        ...mapGetters(['isLoggedIn', 'orders'])
    },
    methods:{
        ...mapActions(['getOrders', 'updateOrderStatus']),
        async onStatusChange($event, id){
            const updateForm = new FormData();
            updateForm.set('order_id', id);
            updateForm.set('status', $event.target.value);
            let resp = await this.updateOrderStatus(updateForm);
            await this.getOrders();
        }
    }

}
</script>

<style lang="scss" scoped>
.latest-heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .view-all-btn{
        text-transform: none;
    }
}

.dashboard{
    background: var(--light-accent);

    h3{
        margin-top: 0;
        padding-top: 16px;
    }
}

.order-table{
    thead tr{
        background: var(--bg-primary);
        color: #fff;
    }

    .total{
        font-weight: bold;
    }

    tbody tr:nth-child(even){
        background: var(--color-accent);
    }
}

.order-select{
    border: 1px solid #aaa;
}
.order-types{
    display: flex;
    justify-content: space-around;
    gap:20px;
    
    .order-card{
        width: 100%;
        margin:0px 16px;
        box-shadow: none;
        border: 1px solid #eee;
        border-radius: 10px;
        p{
            font-size: 1.5em;
            white-space: nowrap;
        }
        span{
            font-weight: bolder;
            font-size: 2em;
        }
        .title-and-icon{
            display: flex;
            align-items: center;
            gap: 10px;
            i{
                font-size: 3em;
            }
        }
    }
}

.no-orders{
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
}

.pending{
    background: gold !important;
    color: #000;
}
.cancelled{
    background: red !important;
    color: #fff;
}
.checked-out{
    background: orange !important;
    color: #000;
}
.delivered{
    background: green !important;
    color: #fff;
}


.pending a{
    background: gold !important;
    color: #000;
}
.cancelled a{
    background: red !important;
    color: #fff;
}
.checked-out a{
    background: orange !important;
    color: #000;
}
.delivered a{
    background: green !important;
    color: #fff;
}


.loading{
  height: 60px;
}


</style>