import styled from "styled-components"

import BtuProductCategories from "./BtuProductCategories"
import UseSearchParams from "./UseSearchParams"


const BodyBtu = styled.div`
    display:flex;
    gap:7px 7px;
`

function BoxProductCategories(){
    const {Categories,Size,Kitchens,Cuisines} = UseSearchParams()
    
    return(
        <BodyBtu>
            <BtuProductCategories Name="Categories" Value={Categories} />
            <BtuProductCategories Name="Size" Value={Size} />
            <BtuProductCategories Name="Kitchens" Value={Kitchens} />
            <BtuProductCategories Name="Cuisines" Value={Cuisines} />
        </BodyBtu>
    )
}

export default BoxProductCategories