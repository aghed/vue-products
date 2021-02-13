<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{product.product_name}}</td>
                    <td>{{product.unit_price}}</td>
                    <td>
                        <button @click.prevent="addToOrder(product)" class="btn btn-primary">add</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>

import Api from '../Http'

export default {
     mounted() {
        this.loadProducts()
    },
    data() {
        return {
            products:[]
        }
    },
    methods:{

        addToOrder(product)
        {
            this.$emit('addToOrder',product)
        },
        loadProducts()
        {
            Api.get('products').then(
                response=>{
                    this.products=response.data
                    console.log(this.products)
                }
            )
        },
    }
}
</script>