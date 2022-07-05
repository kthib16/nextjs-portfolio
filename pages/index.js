import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Script from 'next/script'

const name = 'Kevin Thibodeaux'

const description= "Hi...my name's Kevin Thibodeaux, a communications professional in Washington, D.C. with years of experience managing web content for nonprofit and government organizations."



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className=' text-center md:text-left px-2 mx-auto mt-2 mb-4'>
        <Image
          priority="true"
          src="/images/profile.jpg"
          className='inline-block rounded-full  md:mr-6'
          height='130'
          width='130'
          alt={name}
        />


        <p className='max-w-md inline-block text-base font-light pl-6 '><em>{description}</em>
        <Link href={'/experience'}><p className='cursor-pointer text-sm text-purple-300 hover:text-purple-500 font-bold'>Learn more about my experience >></p></Link></p>
        </div>


      <div className='flex grid grid-cols-2 gap-4 my-16'>

      <Link href={'/word-guess'}>
       <a className='cursor-pointer hover:animate-pulse hover:drop-shadow-md'>
       <div className='h-24 flex mb-0 pb-0'>
          <img src='/images/Word-Guess.png' className='object-cover object-top w-full rounded-t-lg' />
        </div>
        <div className=' bg-purple-300 hover:bg-purple-500 text-white  p-4  rounded-b-lg '>
          <h4 className="text-xl">Word Guess</h4>
          <p className='hidden md:contents'>You've got six chances to guess the right word. Can you do it?</p>
        </div>
      </a>
      </Link>

        <Link href={'/mortgage-map'}>
          <a className='cursor-pointer hover:animate-pulse hover:drop-shadow-md'>
            <div className='h-24 flex mb-0 pb-0'>
              <img src='/images/mortgage-market-map.png' className='object-cover w-full rounded-t-lg' />
            </div>
            <div className=' bg-purple-300 hover:bg-purple-500 text-white  p-4  rounded-b-lg '>
              <h4 className="text-xl">Mortgage Map</h4>
              <p className='hidden md:contents'>Interactive map created using D3.js while at the Brookings Institution.</p>
            </div>
          </a>
        </Link>

          <a className='cursor-pointer  hover:animate-pulse hover:drop-shadow-md ' href="https://jsr914-calendar-app.herokuapp.com/">
              <div className='h-24 flex mb-0 pb-0'>
                <img src='/images/MyCalendar-App/my-calendar-welcome.png' className='object-cover w-full rounded-t-lg border border-gray-100' />
              </div>
              <div  className=' bg-purple-300 hover:bg-purple-500 text-white rounded p-4 rounded-b-lg'>
                <h4 className='text-xl '>MyCalendar</h4>
                <p className="hidden md:contents">Helps users keep track of events, created using React.js and Bootstrap</p>
              </div>
          </a>


      </div>


          <Script src="https://cdn.tailwindcss.com" />



    </Layout>
  )
}
