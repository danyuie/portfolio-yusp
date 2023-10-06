import Image from 'next/image'
import React, { useState } from 'react'
import ButtonSecondary from './ButtonSecondary'
import moment from 'moment'
import Link from 'next/link'

const BlogCard = (props:any) => {
  const [blog, setBlog] = useState(props.blog)
  console.log(blog)
  return (
      <Link href={`blogs/${blog.slug}`} className={`blog-card ${blog.featuredPost ? 'featured':''}`}>
        <div className="image"><Image src={blog.featuredImage.url} width={700} height={500} alt={blog.slug}/></div>
        <div className="content">
          <div className="Text-XS regular creat-at">{moment(blog.createdAt).format('MMM DD, YYYY')}</div>
          <div className="Text-XL bold heading">{blog.title}</div>
          <div className="Text-S regular excerpt">{blog.excerpt}</div>
          {blog.featuredPost ? <ButtonSecondary slug={`blogs/${blog.slug}`} icon={true} title='Learn More' />:''}
        </div>
      </Link>
  )
}

export default BlogCard