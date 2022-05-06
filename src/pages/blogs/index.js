import React from 'react'
import Layout from '../../components/layout';
import { graphql } from 'gatsby';

export default function BlogsPage({data}) {

  const blogs = data.allFile.nodes.map(node =>{
    return <li key={node.id}>{node.name}</li>
  });

  return (
    <Layout>
      <h1>
      Blog's Page
      </h1>
      <ul>
        <p>List of blogs</p>
        {blogs}
      </ul>
    </Layout>
  );
};


export const query = graphql`
  {
    allFile {
      nodes {
        name
        id
      }
    }
  }
`