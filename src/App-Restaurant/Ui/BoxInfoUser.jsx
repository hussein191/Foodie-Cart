/* eslint-disable react/prop-types */
import { DivBodyInfo, H2 } from "../Style/Styley";

function BoxInfoUser({Name,Value}){
    return(
        <DivBodyInfo>
            <H2> {Name} User : </H2>
            <H2 type="black">{Value}</H2>
        </DivBodyInfo>
    )
}

export default BoxInfoUser