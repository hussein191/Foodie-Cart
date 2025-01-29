import { useSearchParams } from "react-router-dom"

function UseSearchParams(){
    const [SearchParams] = useSearchParams()
    const Page = !SearchParams.get("Page") ? 1 : Number(SearchParams.get("Page"))
    const Categories = !SearchParams.get("Categories") ? null : SearchParams.get("Categories")
    const Size = !SearchParams.get("Size") ? null : SearchParams.get("Size")
    const Kitchens = !SearchParams.get("Kitchens") ? null : SearchParams.get("Kitchens")
    const Cuisines = !SearchParams.get("Cuisines") ? null : SearchParams.get("Cuisines")
    
    return {Page,Categories,Size,Kitchens,Cuisines}
}

export default UseSearchParams