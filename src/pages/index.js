import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Home Page</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
