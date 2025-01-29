import BoxInputReview from "./BoxInputReview";
import { Button } from "../Style/Styley";
import AllReviews from "./AllReviews";
import Module from "./ModuleReview";


function ModuleReviews(){
    return(
        <Module>
            <Module.OpenModule  NameOpen="Reviews">
                <Button type="major">Reviews</Button>
            </Module.OpenModule>
            <Module.WindowModule NameWindow="Reviews">
                <BoxInputReview />
                <AllReviews />
            </Module.WindowModule>
        </Module>
    )
}

export default ModuleReviews