import * as React from "react"
import Layout from "../components/Layout"
import 'animate.css';

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="mt-5 animate__animated animate__bounce">Home Page</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
