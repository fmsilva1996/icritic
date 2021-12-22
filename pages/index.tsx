import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import MobileHeader from '@/components/MobileHeader'

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
        <MobileHeader />
        Content Here!
      </main>
    </div>
  )
}

export default Home
