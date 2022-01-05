import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import MobileHeader from '@/components/MobileHeader'
import ActionBar from '@/components/ActionBar'
import SuggestionCard from '@/components/SuggestionCard'
import { SUGGESTION } from '@/components/SuggestionCard/data'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ICritic</title>
        <meta name="description" content="Feedback application" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MobileHeader />
        <ActionBar />
        <SuggestionCard suggestion={SUGGESTION} />
      </main>
    </>
  )
}

export default Home
