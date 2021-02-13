const handleErorr=(errorResponse)=>{
    let errorBag={}
    let res_errors=errorResponse.request.response
    let obj=JSON.parse(res_errors)
    if('supplier_id' in obj.errors)
    {
        errorBag.supplier=obj.errors.supplier_id.join(',')
    }
    if('product_name' in obj.errors)
    {
        errorBag.name=obj.errors.supplier_id.join(',')
    }
    if('unit_price' in obj.errors)
    {
        errorBag.price=obj.errors.supplier_id.join(',')
    }
    return errorBag
}
    
export default handleErorr