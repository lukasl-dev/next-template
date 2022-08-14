import { NextPage } from 'next'
import React from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  /**
   * Layouts the given page component and returns the resulting component.
   *
   * @param page the page component to layout
   * @returns the resulting component
   */
  getLayout?(page: React.ReactElement): React.ReactNode
}
