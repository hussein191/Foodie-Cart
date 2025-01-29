import styled from "styled-components"
import BoxNavBarMenu from "../Ui/BoxNavBarMenu"
import { GetCategoriesApi, GetCuisinesApi, GetKitchensApi, GetSizeApi } from "../Server/GetItems"

const Div = styled.div`
    width:15%;
    border-right:1px solid rgba(102,102,102,0.3);
`

function NavBarMenu(){
    return(
        <Div>
            <BoxNavBarMenu Name="Categories" Value="Name_Billoard" FnApi={GetCategoriesApi} />
            <BoxNavBarMenu Name="Size" Value="Name"  FnApi={GetSizeApi} Value2="Value" />
            <BoxNavBarMenu Name="Kitchens" Value="Value"  FnApi={GetKitchensApi} />
            <BoxNavBarMenu Name="Cuisines" Value="Value" FnApi={GetCuisinesApi} />
        </Div>
    )
}

export default NavBarMenu