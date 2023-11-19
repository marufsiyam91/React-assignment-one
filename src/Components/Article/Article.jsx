import React from 'react'
import './Article.css'

const Article = ({Article}) => {
    const {title, author,publicationDate,content} = Article
  return (
    <div className='article_cart'>
            <h2>Author: {author}</h2>
            <h4>Title: {title}</h4>
            <p>Published: {publicationDate}</p>
            <p>News: {content}</p>
    </div>
  )
}

export default Article
