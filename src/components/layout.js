import React from 'react';
import Navbar from './navbar';
import "./styles/global.css";
import { useStaticQuery, graphql  } from 'gatsby';


export default function Layout({children}) {

  const data = useStaticQuery(graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`);

console.log("data", data)
const { title } = data.site.siteMetadata;
  return (
    <div>
      <Navbar title={title} />      
      {children}
      <footer>
        <p>{title}</p>
      </footer>
    </div>
    
  )
}
