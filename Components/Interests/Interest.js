import classes from './interests.module.css'

const Interest = (props) => {
    const { info } = props
    const { img, title } = info
    return (
        <div>
            <img className={` rounded-xl ${classes.img}`} src={img} />
            <div className='mt-5 md:px-5'>

                <h3 className='text-xl font-semibold'>{title}</h3>
            </div>
        </div>
    )
}


export default Interest