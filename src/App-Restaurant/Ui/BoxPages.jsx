/* eslint-disable react/prop-types */
import styled from "styled-components"
import { Button } from "../Style/Styley"
import { useSearchParams } from "react-router-dom"
import { Size_page } from "./Size_page"

const Div = styled.div`
    display:flex;
    margin-top: 15px;
    align-items: center;
    justify-content: space-between;
`
const DivBtu = styled.div`
    display:flex;
    align-items: center;
    gap:7px 7px;
`

function BoxPages({count}){
    const [SearchParams,SetSearchParams] = useSearchParams()
    const CurrentPage = !SearchParams.get("Page") ? 1 : Number(SearchParams.get("Page"))
    const CountPage = Math.ceil(count/Size_page)

    if(CountPage <=1) return null
    
    function handelNext(){
        const next = CurrentPage === CountPage ? CurrentPage : CurrentPage +1
        SearchParams.set("Page",next)
        SetSearchParams(SearchParams)
    }

    function handelPrevious(){
        const Prev = CurrentPage === 1 ? CurrentPage : CurrentPage -1
        SearchParams.set("Page",Prev)
        SetSearchParams(SearchParams)
    }

    return(
        <Div>
            <p>
                <span>{(CurrentPage-1)*Size_page+1}</span> to <span>{CurrentPage === CountPage ? count: CurrentPage*Size_page}</span> of <span>{count}</span>
            </p>
            <DivBtu>
                <Button onClick={()=>handelPrevious()} disabled={CurrentPage === 1}>Previous</Button>
                <Button onClick={()=>handelNext()} disabled={CurrentPage === CountPage}>Next</Button>
            </DivBtu>
        </Div>
    )
}

export default BoxPages