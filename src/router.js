import Vue from 'vue'
import Router from 'vue-router'

import ListProducts from './views/ListProducts'
import ListOrders from './views/ListOrders'
import CreateProduct from './views/CreateProduct'
import EditProduct from './views/EditProduct'
import EditOrder from './views/EditOrder'
import CreateOrder from './views/CreateOrder'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        
        {
            path:"/products",
            name:"products",
            component:ListProducts,
        },
        
        {
            path:"/products/create",
            name:"newProduct",
            component:CreateProduct
        },
        {
            path:"/products/:id/edit",
            name:"editProduct",
            component:EditProduct,  
        },
        {
            path:"/orders",
            name:"orders",
            component:ListOrders,
        },
        {
            path:"/orders/create",
            name:"newOrder",
            component:CreateOrder
        },
        {
            path:"/orders/:id/edit",
            name:"editOrder",
            component:EditOrder,
        },
        
    ]
})