import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(params: any) {
  const postData = await getPostData(params.params.id)

  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }) => {
  return (
    <Layout home={false}>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export default Post;
