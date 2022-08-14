import '~/styles/globals.css'
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import React from 'react'
import nProgress from 'nprogress'
import { Router } from 'next/router'
import { NextPageWithLayout } from '~/types'

nProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())

interface AppPropsWithLayout extends Omit<AppProps, 'Component'> {
  /**
   * The current {@link NextPageWithLayout} to render.
   */
  Component: NextPageWithLayout
}

const App: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout
    ? Component.getLayout
    : (page: React.ReactElement) => page

  return <>{getLayout(<Component {...pageProps} />)}</>
}

// noinspection JSUnusedGlobalSymbols
export default App
