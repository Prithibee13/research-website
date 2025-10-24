import Link from "next/link"

import classes from "./Article.module.css"
const ArticlesList = () => {
    return (
        <article>
            <div className="px-5 mb-10">
                <h3 className="text-xl font-semibold">Journal Articles</h3>
                <p className="mt-5 mb-5">[ongoing] Uncertainty awarness of skin cancer segmentation models</p>
                <Link href='Articles/uncertainty'>
                    <div className="flex items-center">
                        <p className={`${classes.detailes}`}>Detailes</p>
                        <div>
                            <img className={`${classes.icon}`} src="https://i.postimg.cc/4N3b9X8T/next.png"></img>
                        </div>
                        <div>
                            <img className={`${classes.icon}`} src="https://i.postimg.cc/4N3b9X8T/next.png"></img>
                        </div>
                        <div>
                            <img className={`${classes.icon}`} src="https://i.postimg.cc/4N3b9X8T/next.png"></img>
                        </div>

                    </div>
                </Link>
            </div>
            <div className="px-5 mb-10">
                <h3 className="text-xl font-semibold">Conference Articles</h3>
                <p className="mt-5 mb-5">[ongoing] Explaination of feature exploitation in sentiment analysis by transformer model</p>
                <Link href='Articles/sentiment'>
                    <div className="flex items-center">
                        <p className={`${classes.detailes}`}>Detailes</p>
                        <div>
                            <img className={`${classes.icon}`} src="https://i.postimg.cc/4N3b9X8T/next.png"></img>
                        </div>
                        <div>
                            <img className={`${classes.icon}`} src="https://i.postimg.cc/4N3b9X8T/next.png"></img>
                        </div>
                        <div>
                            <img className={`${classes.icon}`} src="https://i.postimg.cc/4N3b9X8T/next.png"></img>
                        </div>

                    </div>
                </Link>
            </div>
        </article>
    )
}

export default ArticlesList