<template>
    <div>
        <div class="section">
            <div class="filter bar">
                
            </div>
        </div>
        <div class="section">
            <div class="">
                <h3>Latest Orders</h3>
                <a class="waves-effect waves-light btn-small">View All</a>
            </div>
            <table class="highlight responsive-table">
                <thead>
                    <tr>
                        <th>S</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Inventory</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TTT-000-121</td>
                        <td><img src="" alt="image here"></td>
                        <td>Flour</td>
                        <td>Meat</td>
                        <td>454</td>
                        <td><star-rating :clearable="true" :rating="0" :show-rating="false" :star-size="20" :animate="true"></star-rating> </td>
                        <td><a href=""><i class="material-icons">remove_red_eye</i></a>  <a href=""><i class="material-icons">edit</i></a></td>
                    </tr>
                    <tr>
                        <td>TTT-000-121</td>
                        <td><img src="" alt="image here"></td>
                        <td>Flour</td>
                        <td>Meat</td>
                        <td>454</td>
                        <td><star-rating :clearable="true" :rating="0" :show-rating="false" :star-size="20" :animate="true"></star-rating> </td>
                        <td><a href=""><i class="material-icons">remove_red_eye</i></a>  <a href=""><i class="material-icons">edit</i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>   
</template>