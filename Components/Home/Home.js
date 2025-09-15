import Links from "./Links"
import Moniker from "./Monicar"

const Home = ()=>
{
    return(
        <article className={`flex flex-col justify-center items-centerv bg-19183B`}>
            <Moniker></Moniker>
            <Links></Links>
        </article>
    )
}

export default Home