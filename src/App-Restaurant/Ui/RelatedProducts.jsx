import styled from "styled-components";

import UseGetProductByCategorie from "../Hoocs/GetProductByCategorie";
import { DivBody, H2 } from "../Style/Styley";
import BoxProducts from "./BoxProducts";


const DivApp = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
`

function RelatedProducts(){
    const {data,isLoading} = UseGetProductByCategorie()
    if(isLoading) return null
    return(
        <DivApp>
            <H2 type="black">Related Products</H2>
            <DivBody>
                {data.map(e => <BoxProducts Product={e} key={e.id}/>)}
            </DivBody>
        </DivApp>
    )
}

export default RelatedProducts