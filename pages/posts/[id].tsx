import Head from 'next/head';
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

import utilStyles from '../../styles/utils.module.scss'


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
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date date={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export default Post;
