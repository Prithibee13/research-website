import { useEffect, useState } from "react"

const useInterest = () =>
{
    const [interests, setInterests] = useState([])

    useEffect(()=>{
        fetch("/Interest.json").then(res=>res.json()).then(data=>{
        
            
            setInterests(data)
        })
    },[])

    return [interests, setInterests]

}

export default useInterest