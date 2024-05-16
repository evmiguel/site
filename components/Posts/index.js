import Link from "next/link";
import dayjs from "dayjs";


const Posts = ({ posts: { nodes }}) => {
    return (
        <ul className='p-[3rem]'>
            {
                nodes.map((node) => {
                    return (
                        <li className='text-[3rem] [&:not(:last-child)]:mb-[3rem] [&:not(:last-child)]:pb-[4rem] [&:not(:last-child)]:border-b-[1px] [&:not(:last-child)]:border-black'>
                            <h1 className='visited:text-slate-900 text-slate-800'><Link href={`/blog/${node.slug}`}><a className=''>{node.title}</a></Link></h1>
                            <h2 className='text-[2rem]'>{node.author.node.firstName} {node.author.node.lastName}</h2>
                            <h3 className='text-[1.5rem]'>{dayjs(node.date).format('MMMM D, YYYY')}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Posts;