import React from 'react'
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogsPage({data}) {
  const posts = data.allMdx.nodes;
  const renderAllPosts = posts.map(post => {
    const { title, date, description, thumbnail } = post.frontmatter;
    const thumb = getImage(thumbnail);
    return (
      <article key={post.id}>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{description}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <GatsbyImage key={thumbnail.id} image={thumb} alt="thumbnail"/>
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
          thumbnail {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        body
      }
    }
  }
`;