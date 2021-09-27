import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss'
import Head from 'next/head';

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>meow.</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
  </Layout>
);

export default Home;
