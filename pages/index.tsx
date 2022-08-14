import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-blue-600' href='https://nextjs.org'>
            Next.js!
          </a>
        </h1>

        <p className='mt-3 text-2xl'>
          Get started by editing{' '}
          <code className='rounded-md bg-gray-100 p-3 font-mono text-lg'>
            pages/index.tsx
          </code>
        </p>

        <div className='mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
          <a
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            href='https://nextjs.org/docs'
          >
            <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
            <p className='mt-4 text-xl'>
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            href='https://nextjs.org/learn'
          >
            <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
            <p className='mt-4 text-xl'>
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            href='https://github.com/vercel/next.js/tree/canary/examples'
          >
            <h3 className='text-2xl font-bold'>Examples &rarr;</h3>
            <p className='mt-4 text-xl'>
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          >
            <h3 className='text-2xl font-bold'>Deploy &rarr;</h3>
            <p className='mt-4 text-xl'>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a
          className='flex items-center justify-center gap-2'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          rel='noopener noreferrer'
          target='_blank'
        >
          Powered by{' '}
          <Image alt='Vercel Logo' height={16} src='/vercel.svg' width={72} />
        </a>
      </footer>
    </div>
  )
}

export default Home
