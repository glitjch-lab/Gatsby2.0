import React from 'react'
import { Link } from "gatsby";
import * as classes from "./styles/navbar.module.css"

const Navbar = ({title}) => {
  return (
    <nav className={classes.Navbar}>
      <h1>{title}</h1>      
      <ul>
        <Link className={classes.Link} to="/">Home</Link>
        <Link className={classes.Link} to="/about">About</Link>
        <Link className={classes.Link} to="/blogs">Blog</Link>
      </ul>
    </nav>
  )
}

export default Navbar;