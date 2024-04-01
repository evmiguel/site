import Link from "next/link";
import dayjs from "dayjs";

const Posts = ({ posts: { nodes }}) => {
    return (
        <ul>
            {
                nodes.map((node) => {
                    return (
                        <li>
                            <h1><Link href={`/blog/${node.slug}`}>{node.title}</Link></h1>
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