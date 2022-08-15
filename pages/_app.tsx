import '~/styles/globals.css'
import { NextPageWithLayout } from '~/types'
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import React from 'react'
import nProgress from 'nprogress'
import { Router } from 'next/router'

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
  const getLayout = Component.getLayout ?? ((page) => page)

  return <>{getLayout(<Component {...pageProps} />)}</>
}

// noinspection JSUnusedGlobalSymbols
export default App
