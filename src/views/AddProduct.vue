<template>
    <div class="">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="TTT-000-RRR" id="last_name" type="text" class="validate">
                        <label for="last_name">SKU *</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="Item Name" id="last_name" type="text" class="validate">
                        <label for="last_name">Name *</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Category *</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="$0" id="password" type="password" class="validate">
                        <label for="password">Unit Price*</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <label for="password">Taxes</label>
                        <div class="">
                            <p>
                                <label>
                                    <input type="checkbox" class="filled-in" />
                                    <span>GCT</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" class="filled-in" />
                                    <span>SCT</span>
                                </label>
                            </p> 
                        </div>                  
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="1lb" id="password" type="password" class="validate">
                        <label for="password">Unit*</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="0g" id="password" type="password" class="validate">
                        <label for="password">Grams Per Unit*</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="100" id="password" type="password" class="validate">
                        <label for="password">In Stock *</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea class="validate" name="" id="" cols="30" rows="10"></textarea> 
                        <label for="password">Description*</label>
                    </div>
                </div>
                <div class="row">
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" enctype="multipart/form-data">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" >
                        </div>
                    </div>
                </div>
                
                <button class="btn waves-effect waves-light" type="submit" name="action">Add Product
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </div>
</template>