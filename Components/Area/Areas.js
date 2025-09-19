"use client";
import useArea from "../../Hooks/useArea";
import Area from "./Area";

const Areas = () =>
{
    const [areas, setAreas] = useArea();
    return(
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
            {
                areas.map(area=><Area key={area?.id} info={area}></Area>)
            }
        </article>
    )
}

export default Areas