import React from "react"  
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

export const query = graphql`  
  query AuthorQuery($id: String) {
    strapiAuthor(strapiId: { eq: $id }) {
      strapiId
      name
      bio
      posts {
        id
        title
      }
    }
  }
`

const Author = ({ data }) => {  
  const author = data.strapiAuthor
  
  return (
    <Layout>
      <div>
        <div>
          <h1>{author.name}</h1>
        </div>
        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={author.bio} />      
            <h2>{author.name} publications:</h2>
            <div>
            <ul class="uk-list uk-link-text">
              {author.posts.map((post, i) => {
                  return (
                          <li id="title">
                            <Link to={`/post/${post.id}`}>
                              {post.title}
                            </Link>
                          </li>
                          )
                        })
                      }
            </ul>
             </div>
            </div>
        </div>
     </div>
    </Layout>
  )
}

export default Author  