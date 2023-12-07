import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { LandingPage } from "../components/landing/LandingPage"



// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => {



return (
  <Layout>
    <LandingPage/>
  </Layout>
)

}


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
