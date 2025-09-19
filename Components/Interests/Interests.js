"use client";
import useInterest from "../../Hooks/useInterests"
import Interest from "./Interest";

const Interests = () =>
{
    const [interests, setInterests] = useInterest()
    
    return(
        <article className="grid  grid-cols-1 md:grid-cols-2 gap-10 px-3">
        {
            interests.map(interest=><Interest key={interest?.id} info={interest}></Interest>)
        }
        </article>
    )
} 

export default Interests