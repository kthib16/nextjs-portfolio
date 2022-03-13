import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

export default function MortgageMap(){

return(
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <p>Have you ever wanted a simple, easy-to-use, no-frills calendar to keep track of events and stay-up-to-date with your friends? I have! Which is why I tried my hand at creating <a href="https://jsr914-calendar-app.herokuapp.com/" className='text-purple-300 hover:text-purple-500'>MyCalendar app</a>.</p>
    <div className="mt-4 mb-4">
    <Image
      priority
        src='/images/MyCalendar-App/my-calendar-welcome.png'
        width='799'
        height = '377' />
        </div>

        <p>When users first visit the app, they are prompted to signup or login before any information is rendered. This ensures that users will not be shown incorrect information. The app uses Firebase to authenticate users as well as storing data so it is to cross reference the user id with event data for individual users.</p>

        <div className="mt-4 mb-4">
        <Image
          priority
            src='/images/MyCalendar-App/my-calendar-login.png'
            width='799'
            height = '187' />
            </div>

            <p>On logging in, users are taken to a dashboard that features a list of events they are scheduled to attend. From that dashboard, users can choose to edit or remove individual events. In the top navbar, they are also given the option to see a list of nearby events pulled using the Ticketmaster API or to create their own events.</p>

            <div className="mt-4 mb-4">
            <Image
              priority
                src='/images/MyCalendar-App/my-calendar-nearby-events.png'
                width='799'
                height = '410' />
                </div>
    <p>This was my first experiencing using BootStrap for styling and I loved the simplicity and consistency that the framework offers. I used a form that allows users to create their own event to add to their main calendar dashboard and using BootStrap it took me no time at all to add the behavior for the buttons and also responsive input fields for each of the event details. </p>
    <div className="mt-4 mb-4">
    <Image
      priority
        src='/images/MyCalendar-App/my-calendar-create-event.png'
        width='799'
        height = '248' />
        </div>

        <h1 className="text-xl text-purple-500 font-bold">Future Upgrades</h1>
        <p>In future iterations of this project, I hope to continue to add features to the site including adding functionality for friends so that users can add friends and see a list of events that they are attending. I also hope to incorporate other event APIs so to offer users more options of events to attend.</p>



  </Layout>
)

}
