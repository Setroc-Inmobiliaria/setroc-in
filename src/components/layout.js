/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/global.css"
import "./layout.css"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <div
      >
        <main>{children}</main>
        <footer
         className="flex justify-center items-center h-28"
          
        >
          © {new Date().getFullYear()} &middot; 
          {` `}
          <a href="https://www.gatsbyjs.com">SETROC Inmobiliaria</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
