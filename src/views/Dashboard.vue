<template>
    <div class="">
        <div class="col s12 m7">
            <div class="">
                <h2 class="header">Dashboard</h2>
                <ul>
                    <li>
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p>ORDE PENIG</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p>ORDER CANCEL</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p>ORDER PROCESS</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <p>TODAY INCOME</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="">
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>

            <div class="section">
                <div class="">
                    <h3>Latest Orders</h3>
                    <a class="waves-effect waves-light btn-small">View All</a>
                </div>
                <table class="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Billing Name</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Payment Status</th>
                            <th>Payment Method</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1234</td>
                            <td>Alvin Brown</td>
                            <td>07 Oct, 2021</td>
                            <td>$400</td>
                            <td>Paid</td>
                            <td>Cash</td>
                            <td><a href=""><i class="material-icons">remove_red_eye</i></a>  <a href=""><i class="material-icons">edit</i></a></td>
                        </tr>
                        <tr>
                            <td>1234</td>
                            <td>Alvin Brown</td>
                            <td>07 Oct, 2021</td>
                            <td>$400</td>
                            <td>Paid</td>
                            <td>Cash</td>
                            <td><a href=""><i class="material-icons">remove_red_eye</i></a>  <a href=""><i class="material-icons">edit</i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>