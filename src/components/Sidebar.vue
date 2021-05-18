<template>
    <div class="toolbar">
        <nav>
            <div class="nav-wrapper container">
                <a href="#" data-target="slide-out" class="sidenav-trigger menu-btn"><i class="material-icons">menu</i></a>
                <a href="#" class="brand-logo left">GroceryScape</a>
                <ul id="nav-mobile" class="right">
                    <li class="active"><a href="/">Orders</a></li>
                    <li><a href="/delivery">Delivery Schedule</a></li>
                    <li><a href="/inventory">Inventory</a></li>
                    <li><a href="/payments">Payments</a></li>
                    <li><a @click="signout">Logout</a></li>
                </ul>
            </div>
        </nav>
            
        <ul id="slide-out" class="sidenav ">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="images/office.jpg">
                    </div>
                    <a href="#name"><span class="white-text name">Dashboard</span></a>
                </div>
            </li>
            <li>
                <ul class="collapsible expandable">
                    <li>
                        <div class="collapsible-header"><a href=""><i class="material-icons">filter_drama</i>Orders</a></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">filter_drama</i>Products</div>
                        <div class="collapsible-body">
                            <ul>
                                <li><a class="waves-effect waves-light btn-small"><i class="material-icons">person</i><i class="material-icons">expand_more</i></a>All Products</li>
                                <li><a class="waves-effect waves-light btn-small"><i class="material-icons">person</i><i class="material-icons">expand_more</i></a>Add Product</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="collapsible-header"><a href=""><i class="material-icons">Add Employee</i>Reports</a></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><a href=""><i class="material-icons">filter_drama</i>Reports</a></div>
                    </li>
                    <li>
                        <div class="collapsible-header"><i class="material-icons">filter_drama</i>Setting</div>
                        <div class="collapsible-body">
                            <ul>
                                <li><a class="waves-effect waves-light btn-small"><i class="material-icons"></i><i class="material-icons">expand_more</i></a>General Setting</li>
                                <li><a class="waves-effect waves-light btn-small"><i class="material-icons">person</i><i class="material-icons">expand_more</i></a>Payment Setting</li>
                                <li><a class="waves-effect waves-light btn-small"><i class="material-icons">person</i><i class="material-icons">expand_more</i></a>Email Setting</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    mounted(){
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    },
    methods:{
        ...mapActions(['logout']),
        signout(){
            this.logout();
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>

nav{
    background: var(--bg-primary);
}

</style>