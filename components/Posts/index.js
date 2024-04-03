import Link from "next/link";
import dayjs from "dayjs";

const Posts = ({ posts: { nodes }}) => {
    return (
        <ul className="posts">
            {
                nodes.map((node) => {
                    return (
                        <li className="posts__entry">
                            <h1 className="posts__entry-title-link"><Link href={`/blog/${node.slug}`}><a className="posts__entry-title-link">{node.title}</a></Link></h1>
                            <h2>{node.author.node.firstName} {node.author.node.lastName}</h2>
                            <h3>{dayjs(node.date).format('MMMM D, YYYY')}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Posts;