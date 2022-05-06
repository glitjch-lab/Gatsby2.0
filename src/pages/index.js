import * as React from "react";

import * as classes from '../components/styles/input.module.css';

import Layout from "../components/layout";

import { StaticImage } from "gatsby-plugin-image";

const IndexPage = ({data}) => {



  return (
  <Layout>
    <div className={classes.Input}>
    <h1>HELLO WORLD</h1>
    <StaticImage alt="A laptop" src="../images/laptop.png" width={1300}/>
    </div>
  </Layout>
    )
  }

export default IndexPage;

