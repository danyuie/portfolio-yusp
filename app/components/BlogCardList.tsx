import React from 'react'
import BlogCard from './BlogCard'

const BlogCardList = (props:any) => {
  return (
    <React.Fragment>
        {props.blogList.map((blog:any, index:number) => (
        <React.Fragment>
            {index <= 8 ? <BlogCard key={index} blog={blog.node} />: ''}
        </React.Fragment>
        ))}
    </React.Fragment>
  )
}

export default BlogCardList