import React from "react"  
import { Link } from "gatsby"

const Card = ({ post }) => {  
  return (
    <Link to={`/post/${post.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={post.node.image.publicURL}
            alt={post.node.image.publicURL}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="author" className="uk-text-uppercase">
            {post.node.author.name}
          </p>
          <p id="title" className="uk-text-large">
            {post.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card  