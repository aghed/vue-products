<template>
    <div class="container">
        <div class="row">
           
            <div class="col-md-offset-2 col-md-8 ">
        <div class="panel panel-success">
            <div class="panel-heading">
                <button class="btn btn-default" @click.prevent="goBack">
                    <span class="glyphicon glyphicon-arrow-left"></span>
                </button>
                <h2 class="center">New Product</h2>  
            </div>
            <div class="panel-body ">
                <div class="row">
                <form @submit.prevent="submit" class=" col-sm-offset-2 col-sm-8">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" v-model="form.product_name" required>
                        <span class="text-danger" v-show="errors.name">{{errors.name}}</span>
                    </div>

                     <div class="form-group">
                        <label for="supplier_id">Supplier</label>
                        <select type="text" class="form-control" name="supplier_id" v-model="form.supplier_id" required>
                           
                            <option value="1">first</option>
                            <option value="2">second</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                        </select>
                        <span class="text-danger" v-show="errors.supplier">{{errors.supplier}}</span>
                    </div>

                     <div class="form-group">
                        <label for="unit_price">price</label>
                        <input type="number" step="0.01" class="form-control" name="unit_price" v-model="form.unit_price" required>
                        <span class="text-danger" v-show="errors.price">{{errors.price}}</span>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-success" type="submit">save</button>
                        <div class="pull-right">
                            <button class="btn btn-danger"  @click.prevent="cancel">cancel</button>
                        </div>
                    </div>

                </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script>
import Api from '../Http'
import Swal from 'sweetalert2'
import errorResposne from '../errorHandle/product/resposneError'
import valdiateForm from '../errorHandle/product/validateForm'

export default {
    name:'CreateProduct',

    data(){
        return {
            form:{},
            errors:{}
        }
    },
    methods: {
        submit()
        {
            let validator=valdiateForm(this.form)
            console.log(validator)
            
            if(validator.isValid)
            {
                //post the form
                Api.post('products',this.form)
                .then(()=>{
                    Swal.fire('created!','Product Created Successfully','success')
                    this.form={}
                })
                .catch(err=>this.errors=errorResposne(err))
            }
            else
            {
                this.errors=validator.errors
            }
        },

        cancel()
        {
            this.form={}
            
        },
        goBack()
        {
            this.$router.back()
        }
    },
}
</script>