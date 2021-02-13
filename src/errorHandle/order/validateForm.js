const validateForm=(form)=>
{
    let errors={}
    let str=form.product_name

    if ( !str || str.Empty || str.length===0 )
        {
            errors.name="the name filed is required"
        }

        if(form.supplier_id==null )
        {
            errors.supplier="please select supplier"
        }

        if(form.unit_price==null)
        {
            errors.price="the price filed is required"
        }

        if(form.unit_price <=0 )
        {
            errors.price="the price should be a positive number"
        }
        //if it is empty then there is no errors
        let isValid=Object.keys(errors).length===0
        return   {isValid,errors}       
        
    }

export default validateForm