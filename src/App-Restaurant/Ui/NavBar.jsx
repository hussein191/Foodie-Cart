import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom"
import styled from "styled-components"

import UseGetUser from "../User/UseGetUser"
import { useSelector } from "react-redux";
import { Button } from "../Style/Styley"

const Ul = styled.ul`
    display: flex;
    column-gap: 17px;
    list-style: none;
    align-items: center;
`
const LinkStuly = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-weight: 450;
    color:#1d1d1d;
    transition: 0.3s ease;
    ${
        (prop) => prop.type === "link" &&`
            &:hover{
                color:rgba(64,64,64,0.8)
            }
        `
    }
`
const DivRev = styled.div`
    position: relative;
`
const DivAbc = styled.div`
    width:11px;
    height:11px;
    background-color: red;
    padding:3px;
    color:#FFFF;
    border-radius: 50%;
    position: absolute;
    top:-12px;
    right:-7px;
    display:flex;
    justify-content: center;
    font-size:10px;
`
const Img = styled.img`
    width:27px;
    height:27px;
    border-radius: 50%;
`


function NavBar(){
    const ShopingCart = useSelector((state) => state.Cart.ShopingCart)
    const favoritesItems = useSelector((state) => state.Favorites.ArryFavorites)
    const {user,isAuthenticated,isLoading} = UseGetUser()
    if(isLoading) return null
    
    return(
        <Ul>
            <li>
                <LinkStuly type="link" to="/">Home</LinkStuly>
            </li>
            <li>
                <LinkStuly type="link" to="/Menu">Menu</LinkStuly>
            </li>
            <li>
                <LinkStuly type="link" to="/Orders">Orders</LinkStuly>
            </li>
            <li>
                <LinkStuly type="link" to="">About</LinkStuly>
            </li>
            <li>
                <LinkStuly type="link" to="">Contact Us</LinkStuly>
            </li>
            <li>
                <LinkStuly to="/Favorites">
                    <DivRev>
                        <GrFavorite size={"22px"}/>
                        <DivAbc>{favoritesItems.length}</DivAbc>
                    </DivRev>
                </LinkStuly>
            </li>
            {!isAuthenticated && 
                <>
                    <li>
                        <Button>
                            <LinkStuly to="/Login">Login</LinkStuly>
                        </Button>
                    </li>
                    <li>
                        <Button type="major">
                            <LinkStuly to="/Singin">Sing Up</LinkStuly>
                        </Button>
                    </li>
                </>
            }
            {isAuthenticated && 
                <>
                    <li>
                        <LinkStuly to="/ShoppinCart">
                            <DivRev>
                                <FiShoppingCart size={"22px"}/>
                                <DivAbc>{ShopingCart.length}</DivAbc>
                            </DivRev>
                        </LinkStuly>
                    </li>
                    <li>
                        <LinkStuly to={"/Setting"}>
                            <Img src={user.user.user_metadata.imageUser} alt="Image-user" />
                        </LinkStuly>
                    </li>
                </>

            }
        </Ul>
    )
}

export default NavBar