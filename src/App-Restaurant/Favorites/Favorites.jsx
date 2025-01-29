import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { CrealFav } from "../Redux/FavoritesSlice"
import BoxProducts from "../Ui/BoxProducts"
import TitelPAge from "../Ui/TitelPage"
import Spiner from "../Ui/Spiner"

const DivFav = styled.div`
    display:flex;
    column-gap: 12px;
    row-gap: 75px;
    flex-wrap: wrap;
    padding-top:65px;
    margin-bottom: 30px;
`

function FavoritesItems(){
    const favoritesItems = useSelector((state) => state.Favorites.ArryFavorites)
    const Dispatch = useDispatch()
    return(
        <>
            {!favoritesItems.length ? <Spiner>Not Found!</Spiner>:
                <>
                    <TitelPAge Name="Favorites Item" onclick={() => Dispatch(CrealFav()) } />
                    <DivFav>
                        {
                            favoritesItems.map(e => <BoxProducts key={e.id} Product={e} Type="Favorites"/>)
                        }
                    </DivFav>
                </>
            }   
        </>
    )
}

export default FavoritesItems