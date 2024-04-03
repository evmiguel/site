import Link from "next/link";
import dayjs from "dayjs";
import styles from './Posts.module.scss';


const Posts = ({ posts: { nodes }}) => {
    return (
        <ul className={styles.posts}>
            {
                nodes.map((node) => {
                    return (
                        <li className={styles.posts__entry}>
                            <h1 className={styles.posts__entry_title}><Link href={`/blog/${node.slug}`}><a className={styles.posts__entry_title_link}>{node.title}</a></Link></h1>
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