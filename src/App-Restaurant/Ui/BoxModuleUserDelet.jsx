import styled from "styled-components";

import UseDeletUser from "../User/UseDeletUser";
import { Button, H2 } from "../Style/Styley";
import Module from "./ModuleUser";


const Div = styled.div`
    display : flex;
    justify-content: flex-end;

`

function BoxModuleUserDelet(){
    const {DeletUser,isLoading} = UseDeletUser()
    return(
        <Module>
            <Module.OpenModuel  NameOpen="Delet-user">
                <Button type="major">Delet Account</Button>
            </Module.OpenModuel>
            <Module.WindowModule NameWindow="Delet-user">
                <div>
                    <H2 type="black">Are you sure to delete the account?</H2>
                    <Div>
                        <Button onClick={() => DeletUser()} disabled={isLoading} type="Delet">Delet</Button>
                    </Div>
                </div>
            </Module.WindowModule>
        </Module>
    )
}

export default BoxModuleUserDelet