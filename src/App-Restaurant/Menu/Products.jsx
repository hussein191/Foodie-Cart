import styled from "styled-components"


import BoxProductCategories from "../Ui/BoxProductCategories"
import UseGetProducts from "../Hoocs/UseGetProducts"
import BoxProducts from "../Ui/BoxProducts"
import { DivBody } from "../Style/Styley"
import BoxPages from "../Ui/BoxPages"
import Spiner from "../Ui/Spiner"

const Div = styled.div`
    width:85%;
    padding:15px;
`


function Products(){
    const {Items,count,isLoading} = UseGetProducts()
    
    return(
        <Div>
            {isLoading? <Spiner>Looding...</Spiner> :
                !Items.length? 
                    <>
                        <BoxProductCategories /> 
                        <Spiner>Not Found</Spiner> 
                    </> 
                :
                    <>  
                        <BoxProductCategories />
                        <DivBody>
                            {Items.map(e => <BoxProducts Product={e} Type="menu" key={e.id}/>)}
                        </DivBody>
                        <BoxPages count={count} />
                    </>
            }
        </Div>
    )
}



export default Products