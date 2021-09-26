import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout'

export default () => {
  return (
    <Layout>
      <p>
        <h1>First post!</h1>
      </p>
      <p>
        <Image src="/images/profile.jpg" width={128} height={128} />
      </p>
      <p>
        <Link href="/">
          Back
        </Link>
      </p>
    </Layout>
  )
};
