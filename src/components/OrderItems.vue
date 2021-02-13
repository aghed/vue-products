<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                <th>product</th>
                <th>unitPrice</th>
                <th>quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orderItems" :key="item.id">
                    <td>{{item.name}}</td>  
                    <td>{{item.price}}</td>
                    <td class="btn-group">
                        <button @click.prevent="minus(item.id)" class="btn btn-warning">-</button>
                        <button class="btn btn-default">{{item.quantity}}</button>
                        <button @click.prevent="plus(item.id)" class="btn btn-success">+</button>
                    </td>
                    <td class="btn-group">
                        <button @click="remove(item.id)" class="btn btn-danger">
                            <span class="glyphicon glyphicon-trash"></span>
                        </button>
                    </td>
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        orderItems:Array,
    },
    mounted() {
        console.log(this.orderItems)
    },
    methods: {
        minus(id)
        {
            let item=this.orderItems.find(item=>item.id==id)
            if(item.quantity>0)
                item.quantity--
        },
        plus(id)
        {
            let item=this.orderItems.find(item=>item.id==id)
            item.quantity++
        },
        remove(id)
        {
            let item=this.orderItems.find(item=>item.id==id)
            let index=this.orderItems.indexOf(item)
            this.orderItems.splice(index,1)
        }
    },
}
</script>