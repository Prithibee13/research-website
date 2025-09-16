import Classes from './Areas.module.css'
const Area = (props)=>
{
    const { info } = props
    const { img, title } = info
    return(
        <article>
            <img className={Classes.img} src={img} alt={title}/>
            <h2>{title}</h2>
        </article>
    )
}

export default Area