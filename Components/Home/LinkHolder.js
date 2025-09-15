import Link from "next/link"

const LinkHolder = (props) => {
    const { info } = props
    const { name, to } = info
    return (
        <div className="mt-5 text-center">
            <Link href={to}>{name}</Link>
        </div>
    )
}

export default LinkHolder