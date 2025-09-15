import classes from './interests.module.css'

const Interest = (props) =>
{
    const { info } = props
    const { img , title} = info
    return(
        <div>
            <img className={` rounded-xl ${classes.img}`} src={img}/>
            <h3>{title}</h3>
        </div>
    )
}


export default Interest