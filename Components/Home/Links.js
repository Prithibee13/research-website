const { default: LinkHolder } = require("./LinkHolder")

const Links = () =>
{
    const links = [
        {
            id: 6,
            name : "About Me",
            to: "/"
        },
        {
            id: 1,
            name : "Research Interests",
            to: "Interest"
        },
        {
            id: 2,
            name : "Research Area",
            to: "Area"
        },
        {
            id: 3,
            name : "Articles",
            to: "Articles"
        },
        {
            id: 4,
            name : "CV",
            to: "CV"
        },
        {
            id: 5,
            name : "Cover Letter",
            to: "CoverLetter"
        }
        
    ]
    return(
        <article className="">
            {
                links.map(link=>(<LinkHolder key={link.id} info={link}></LinkHolder>))
            }
        </article>
    )
}

export default Links