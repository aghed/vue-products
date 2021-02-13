<template>
    <div class="container">
        <div class="row">
           
        <div class=" col-md-12">
        <div class="panel panel-success">
            <div class="panel-heading">
                <button class="btn btn-default" @click.prevent="goBack">
                    <span class="glyphicon glyphicon-arrow-left"></span>
                </button>
                <h2 class="center">New Order</h2>  
            </div>
            <div class="panel-body">
                <div class="row">
                <form @submit.prevent="submit" class="col-sm-12 form-horizintal">
                    <div class="form-group col-sm-6">
                      <label for="customer">Customer</label>
                      <select class="form-control" v-model="form.customer_id">
                          <option :value="customer.id" v-for="customer in customers" :key="customer.id" :selected="form.customer_id===customer.id">
                              {{customer.first_name+' '+customer.last_name}}
                          </option>
                      </select>
                      
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="date">Date</label>
                      <input type="date" v-model="form.order_date" class="form-control">
                    </div>

                     <div class="row">
                         <div class="col-sm-5">
                             <h2>products</h2>
                             <order-products  @addToOrder="addToOrder($event)"/>
                         </div>
                         <div class="col-sm-7">
                             <h2>Items</h2>
                             <order-items :orderItems="items"/>
                         </div>
                     </div>
                        <hr>
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
import Swal from 'sweetalert2'
import OrderItems from '../components/OrderItems.vue'
import orderProducts from '../components/orderProducts.vue'
import Api from '../Http'

export default {
  components: { orderProducts, OrderItems },
   mounted()
   {
       Api.get('customers').then(response=>
           this.customers=response.data
       )
       Api.get(`orders/${this.id}`).then(response=>{
           this.form=response.data
          
           let items=response.data.order_items    
           items.forEach(item=>{
               this.items.push({
                 id:item.id,
                 name:item.product.product_name,
                 price:item.product.unit_price,
                 quantity:1
               })
           })
            console.log(this.form)
       })
   },
    data() {
        return {
            id: this.$route.params.id,
            items:[],
            customers:[],
            form:{}
        }
    },
    methods: {
        
          goBack()
        {
            this.$router.back()
        },
        addToOrder(product)
        {
            let item=this.items.find(prod=>prod.id===product.id)
            if(item)
            {
                item.quantity++
            }
            else

                this.items.push({
                    id:product.id,
                    name:product.product_name,
                    price:product.unit_price,
                    quantity:1
                })
        },
        submit()
        {
            let postBody={
                customer_id:this.form.customer_id,
                order_date:this.form.order_date,
                items:this.items
            }

            Api.put(`orders/${this.id}`,postBody).then(
                Swal.fire('Success!','order created','success')
            ).catch(err=>
               console.log(err)
            )
        }
    },   
}
</script>