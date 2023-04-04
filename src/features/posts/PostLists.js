import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthors';
const PostLists = () => {
    const posts = useSelector(state=>state.posts);

    const renderedPosts = posts.map(post=>{
        return <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <PostAuthor userId = {post.userId}/>
        </article>
    })
  return (
    <div>
        <h2>Posts</h2>
        {renderedPosts}
    </div>
  )
}

export default PostLists