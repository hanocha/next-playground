import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    // <div className="container">
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/posts/first-post">
        test
      </Link>
    </Layout>
    // </div>
  )
}
