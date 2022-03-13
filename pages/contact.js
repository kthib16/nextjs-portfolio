import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Contact() {
//states for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

//Form validation state
  const [errors, setErrors] = useState("");

//Setting button text on form submission
const [buttonText, setButtonText] = useState("Send");

//Setting success of failure message states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if(isValidForm){
      setButtonText('Sending');
      // const res = await fetch('/api/sendgrid', {
      //     body: JSON.stringify({
      //       email: email,
      //       fullname: fullname,
      //       subject: subject,
      //       message: message
      //     }),
      //     headers: {
      //       "Content-Type": "applicaton/json",
      //     },
      //     method: "POST"
      //   });
      // const { error } = await res.json();
      // if(error) {
      //   console.log(error);
      //   setShowSuccessMessage(false);
      //   setShowFailureMessage(true);
      //   setButtonText('Send');
      //   return
      // }
      let data = {
        fullname,
        email,
        subject,
        message
      }

      fetch('/api/contact', {
        method: 'POST',
        header: {
            'ACCEPT': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

      }).then((res) => {
        console.log('Response received')
        if(res.state === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setFullname('')
          setEmail('')
          setSubject('')
          setMessage('')
        }
      })

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message)
  }

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if(fullname.length <= 0){
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if(email.length <= 0){
      tempErrors['email'] = true;
      isValid = false
    }
    if(subject.length <= 0){
      tempErrors['subject'] = true;
      isValid = false;
    }
    if(message.length <= 0){
      tempErrors['message'] = true;
      isValid = false;
    }
    setErrors({...tempErrors});
    console.log('errors', errors)
    return isValid;

  }

  return (
    <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">
      <h1 className="text-2xl font-bold text-purple-500">Send a message</h1>

      <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-purple-500">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-gray-500" />

      <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-purple-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-gray-500" />

      <label htmlFor="subject" className="text-gray-500 font-light mt-4">Subject<span className="text-purple-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-gray-500" />

      <label htmlFor="message" className="text-gray-500 font-light mt-4">Message<span className="text-purple-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-purple-300 hover:bg-purple-500 hover:animate-pulse text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send

        </button>

      </div>
      </form>
    </Layout>
  )
}
