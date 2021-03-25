import '../styles/globals.css'
import Head from 'next/head' 

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>uLesson App</title>
    </Head>
    {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </>
    )
}

export default MyApp
