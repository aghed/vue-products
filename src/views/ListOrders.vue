<template>
    <div class="container">
        <div class="panel panel default">
            <div class="panel-heading">
                <h2>orders</h2>
                <hr>
                <div class="pull-right">
                    <router-link to="/orders/create" class="btn btn-success"> Add New</router-link>
                </div>
            </div>

            <div class="panel-body">
                <div v-show="loading">
                    <img src="../assets/loading.gif" alt="">
                </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <td>Number</td>
                                <td>Customer</td>
                                <td>Date</td>
                                <td>Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in orders" :key="order.id">
                               <td>{{order.order_number}}</td>
                               <td>{{order.customer.first_name+' '+order.customer.last_name}} </td>     
                               <td>{{order.order_date}}</td>
                               <td>{{order.total_amount}}</td>
                               <td class="btn-group">
                                   <router-link :to="{name:'editOrder',params:{id:order.id}}" class="btn btn-warning">
                                       modify
                                   </router-link>
                                   <button @click.prevent="remove(order.id)" class="btn btn-danger">
                                       delete
                                   </button>
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
import Api from '../Http'
import Swal from 'sweetalert2'
export default {
    name:'ListOrder',
    mounted()
    {
        this.loadOrders()
    },
    data() {
        return {
            orders:Array,
            loading:Boolean
        }
    },
    methods:
    {
        loadOrders()
        {
            this.loading=false
            Api.get('orders').then(
                response=>
                {
                    console.log(response)
                    this.orders=response.data
                    this.loading=false
                    }
            ).catch(()=>
                {
                    this.loading=false
                    Swal.fire('Error!','some error happend','error')
                }
            )
        },
        remove(id)
        {
           
            
                Swal.fire({
                        title: "Are you sure?",
                        text: "order well be deleted",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it!",
                        closeOnConfirm: false
                    }).then(
                    ()=> {
                        Api.delete(`orders/${id}`).then(
                            Swal.fire('Deleted','prodcut deleted successfully','success')
                        ).catch(
                           err =>console.log(err)
                        )
                    });
        }
        
    }
}
</script>