import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom"


import UseGetProductByID from "../Hoocs/GetProductByID";
import BoxDetailsProduct from "../Ui/BoxDetailsProduct"
import RelatedProducts from "../Ui/RelatedProducts"
import { Button } from "../Style/Styley"
import Spiner from "../Ui/Spiner"


function ProductDetails(){
    const Navigate = useNavigate()
    const {data,isLoading} = UseGetProductByID()

    return(
        <>
            {isLoading ? <Spiner>Looding..</Spiner> : 
                <>
                    <Button type="major" onClick={() =>Navigate(-1)}><HiArrowLeft/> Back</Button>
                    {data.map(e => <BoxDetailsProduct Product={e} key={e.id} />)}
                    <RelatedProducts />
                </>
            }
        </>
    )
}

export default ProductDetails