import * as React from "react"
import Layout from "../components/Layout"
import 'animate.css';

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="mt-5 animate__animated animate__bounce">Contact Page</h1>
      </div>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Home Page</title>
