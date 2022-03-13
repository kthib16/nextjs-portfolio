import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export const siteTitle = 'Thibodeaux Portfolio'


export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Experienced web content manager with knowledge of React and Angular."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="relative h-12 w-full block sticky top-0 bg-white z-50 pt-1 px-2 object-right shadow-xl">
      <div className='absolute hover:animate-pulse hover:cursor-pointer'>

          <button className='bg-purple-300 hover:bg-purple-500 rounded pl-2 pr-2 h-8 text-white font-bold'><a href='/files/thibodeaux-resume.pdf' download='thibodeaux-resume.pdf'>Resume</a>

          </button></div>


      <div className='absolute right-0 pt-1 pr-2 bottom-0'>

    
      <Link href="https://github.com/kthib16">
        <a className='pr-4'>
          <Image
            src='/github.png'
            height='25px'
            width='25px'

                />
        </a>
        </Link>
        <Link href="https://www.linkedin.com/in/thibodeauxkevin/">
          <a>
            <Image
              src='/linkedin.png'
              height='25px'
              width='29px'
            />
          </a>
          </Link>
        </div>
      </header>
      <div className='container mx-auto bg-white h-screen pt-4 max-w-3xl px-10'>
      <main>{children}</main>
      {!home && (
        <div className='mt-12 mb-4 text-purple-300 hover:text-purple-500 font-bold'>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <hr />
      <footer className=" bottom-0 w-full">
        <p className='text-purple-200 '>Built using NextJS and TailwindCSS</p>
      </footer>
    </div>

    </>
  )
}
