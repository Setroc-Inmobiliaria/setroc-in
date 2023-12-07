import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
   className="h-28 flex justify-center items-center"
    
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    
  </header>
)

export default Header
