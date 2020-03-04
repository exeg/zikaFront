import React from "react"  
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"  
import PostsComponent from "../components/posts"

import "../assets/css/main.css"


const IndexPage = () => (  
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiPost {
            edges {
              node {
                strapiId
                title
                author {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Strapi blog</h1>
            <PostsComponent posts={data.allStrapiPost.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage  