import React from 'react'
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function BlogsPage({data}) {
  const posts = data.allMdx.nodes;
  const renderAllPosts = posts.map(post => {
    const { title, date, description } = post.frontmatter;
    console.log("post",post.body)
    return (
      <article key={post.id}>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{description}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    );
  });

  return (
    <Layout>
      <h1>
      Blog's Page
      </h1>
      <ul>
        <p>List of blogs</p>
        {renderAllPosts}
      </ul>
        {/* <MDXRenderer>{renderAllPosts}</MDXRenderer> */}
    </Layout>
  );
};


export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          description
          date
        }
        id
        body
      }
    }
  }
`;