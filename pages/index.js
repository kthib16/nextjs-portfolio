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

      <div className='flex pr-2 mt-2 mb-4'>
        <Image
          priority
          src="/images/profile.jpg"
          className='rounded-full mr-6'
          height={130}
          width={130}
          alt={name}
        />


        <div className='w-96 text-base font-light pl-6 '><em>{description}</em></div>
        </div>


      <div className='flex grid grid-cols-2 gap-4 my-16'>

        <Link href={'/mortgage-map'}>
        <a className='cursor-pointer hover:animate-pulse hover:drop-shadow-md'>
        <div className='h-24 flex mb-0 pb-0'>
          <img src='/images/mortgage-market-map.png' className='object-cover w-full rounded-t-lg' />
        </div>
        <div className=' bg-purple-300 hover:bg-purple-500 text-white  p-4  rounded-b-lg '>


            <h4 className="text-xl">Mortgage Map</h4>
            <p>An interactive map of nonbank mortagage lending created using D3.js while at the Brookings Institution.</p>
          </div></a></Link>

          <Link href={'/my-calendar'}>
          <a className='cursor-pointer  hover:animate-pulse hover:drop-shadow-md '>
          <div className='h-24 flex mb-0 pb-0'>
            <img src='/images/MyCalendar-App/my-calendar-welcome.png' className='object-cover w-full rounded-t-lg border border-gray-100' />
          </div>
          <div  className=' bg-purple-300 hover:bg-purple-500 text-white rounded p-4 rounded-b-lg'>

              <h4 className='text-xl '>MyCalendar</h4>

            <p>An app to help users keep track of events, created using React.js, Firebase, and the TicketMaster API</p>
          </div>
          </a></Link>
          </div>
          <Script src="https://cdn.tailwindcss.com" />

    </Layout>
  )
}
