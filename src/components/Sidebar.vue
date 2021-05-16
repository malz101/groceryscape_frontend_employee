<template>
    <div class="toolbar">
        <nav class="nav-wrapper">
            <div class="toolbar">
                <div class="header-bar">
                    <span id="brand">  <router-link to="/"><img src="../assets/default.svg" alt="" srcset=""></router-link> </span>
                </div>
            
                <ul id="nav-mobile" class="right">
                    <li><a class="waves-effect waves-light btn-small"><i class="material-icons">dehaze</i></a></li>
                    <li><a class="waves-effect waves-light btn-small"><i class="material-icons">person</i><i class="material-icons">expand_more</i></a></li>
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
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
</template>