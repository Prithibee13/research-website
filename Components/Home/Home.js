import Links from "./Links"
import Moniker from "./Monicar"
import classes from './Home.module.css'

const Home = ()=>
{
    return(
        <article className={`flex flex-col justify-center items-center shadow-xl p-10 ${classes.home}`}>
            <Moniker></Moniker>
            <Links></Links>
        </article>
    )
}

export default Home