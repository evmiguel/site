import { gql } from '@apollo/client';
import client from '../utils/apolloClient';
import Posts from '../components/Posts';


const Blog = ({ posts }) => {
    return <Posts posts={posts} />
}

export async function getStaticProps() {
    const { data } = await client.query({
      query: Blog.query
    });
    return {
      props: {
        posts: data.posts
      },
      revalidate: 60
    };
  }


Blog.query  = gql`
    query GetPosts {
        posts {
            nodes {
                author {
                    node {
                        firstName
                        lastName
                    }
                }
                content
                date
                title
                slug
            }
        }
    }
`;

export default Blog;