import { useEffect, useState } from "react"

const useArea = () =>
{
    const [Areas, setAreas] = useState([])
    
    useEffect(()=>{
        fetch('/Area.json').then(res=>res.json()).then(data=>setAreas(data))
    },[])

    return [Areas,setAreas]
}

export default useArea