import Classes from './Areas.module.css'
const Area = (props) => {
    const { info } = props
    const { img, title } = info
    return (
        <article>
            <img className={`${Classes.img} rounded-lg`} src={img} alt={title} />
            <div className='mt-5 px-5'>
                <h2 className='text-xl font-semibold'>{title}</h2>
            </div>
        </article>
    )
}

export default Area