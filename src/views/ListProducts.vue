<template>
    <div class="container">
        <div class="panel panel default">
            <div class="panel-heading">
                <h2>produtcs </h2>
                <hr>
                <div class="pull-right">
                    <router-link to="/products/create" class="btn btn-success"> Add New</router-link>
                </div>
                
                <br>
            </div>

            <div class="panel-body">
                <div v-show="loading">
                    <img src="../assets/loading.gif" alt="">
                </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>ProductName</td>
                                <td>SupplierId</td>
                                <td>UnitPrice</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" :key="product.id">
                                <td>{{product.id}}</td>    
                                <td>{{product.product_name}}</td>
                                <td>{{product.supplier_id}}</td>
                                <td>{{product.unit_price}}</td>
                                <td class="btn-group">
                                    <router-link :to="{name:'editProduct',params:{id:product.id}}" class="btn btn-warning">modify</router-link>
                                    <button @click.prevent="remove(product.id)" class="btn btn-danger">delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import Api from '../Http'

export default {
    name:'ListProduct',
    data() {
        return {
            products:Array,
            loading:Boolean
        }
    },
    mounted() {
        this.loadProducts()

    },
    methods:{
        loadProducts()
        {
            this.loading=true
            Api.get('products').then(response=>{
            this.products=response.data
            this.loading=false})
            .catch(()=>{
            this.loading=false
            Swal.fire('Error!','some error happend','error')
        })
        },
        remove(id)
        {
            
                Swal.fire({
                        title: "Are you sure?",
                        text: "product well be deleted",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it!",
                        closeOnConfirm: false
                    }).then(
                    ()=> {
                        Api.delete(`products/${id}`).then(
                            Swal.fire('Deleted','order deleted successfully','success')
                        )
                    });
        }
    }
}
</script>