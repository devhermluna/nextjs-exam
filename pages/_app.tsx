import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>NextJS Exam - Herm</title>
        <meta name="description" content="Upwork exam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0">
        {router.pathname !== '/' && (
          <div className="container">
            <div className="absolute mt-5 flex">
              <button
                type="button"
                onClick={() => router.back()}
                className="bg-red-700 text-white p-2 text-xs rounded-md mr-2"
              >
                Go back
              </button>
              <Link href="/">
                <a className="bg-blue-700 text-white p-2 text-xs rounded-md">Browse More Categories</a>
              </Link>
            </div>
          </div>
        )}
        <img
          src="/header-image.jpg"
          alt="Me riding a bicycle"
          className="header-image"
        />
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default App;
