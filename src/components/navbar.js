import React from 'react'
import { Link } from "gatsby";
import * as classes from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <h1>Navbar</h1>      
      <ul>
        <Link className={classes.Link} to="/">Home</Link>
        <Link className={classes.Link} to="/about">About</Link>
        <Link className={classes.Link} to="/blogs">Blog</Link>
      </ul>
    </nav>
  )
}

export default Navbar;