import styled from "styled-components"

import UseGetItems from "../Hoocs/UseGetItems"
import { GetBestProductApi } from "../Server/GetItems"
import BoxProducts from "../Ui/BoxProducts"
import TitelHome from "./TitelHome/TitelHome"
import { H2 } from "../Style/Styley"
import Spiner from "../Ui/Spiner"


const DivProducts = styled.div`
    margin-top: 12px;
    display:flex;
    gap:21px 21px;
    padding:20px;
    padding-top:86px;
`

function Home(){
    const {data,isLoading} = UseGetItems(GetBestProductApi,"BestProducts")
    if(isLoading) return null

    return(
        <>
            <TitelHome />
            { 
                isLoading ? <Spiner>Loadding...</Spiner> : 
                !data.length ? "" : 
                <main>
                    <H2 type="black">Best Seller</H2>
                    <DivProducts>
                        {data.map(((product,i) => <BoxProducts key={i} Product={product} Type="menu" />))}
                    </DivProducts>
                </main>
            }
        </>
    )
}

export default Home