import styled from "styled-components"

import UseGetRivews from "../Hoocs/GetRivews"
import { H2 } from "../Style/Styley"
import BoxReview from "./BoxReview"
import Spiner from "./Spiner"


const Div = styled.div`
    padding:12px;
    height:40vh;
    margin-top: 10px;
    overflow-y: auto;
`
const DivTitel = styled.div`
    display:flex;
    justify-content: flex-end;
`

function AllReviews(){
    const {Reviews,isLoading} = UseGetRivews()
    return(
        <>
            {isLoading? <Spiner>Loadding...</Spiner> : 
                !Reviews.length ? <Spiner>Not Found!</Spiner> : 
                    <Div>
                        <DivTitel>
                            <H2>{`Reviews (${Reviews.length})`}</H2>
                        </DivTitel>
                        {
                            Reviews.map(e => <BoxReview key={e.id} Review={e} />)
                        }
                    </Div>
            }
        </>
    )
}

export default AllReviews