import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ICritic</title>
        <meta name="description" content="Feedback application" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>ICritic</h1>
      </main>
    </div>
  )
}

export default Home
