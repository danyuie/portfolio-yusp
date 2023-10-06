"use client"
import React, { useEffect, useState } from 'react'
import BlogCardList from './../components/BlogCardList';
import { getBlog } from '@/services';
import ContactCard from '../components/ContactCard';


const blogs = () => {
  const [blogList, setBlogList] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps();
  },[])

  const getStaticProps = async () => {
    const project:any = (await getBlog()) || []
    setBlogList(project?.postsConnection.edges)
  }
  // console.log(blogList)
  return (
    <div className='container-global blog'>
      <div className="Heading-XL bold">Blog</div>
      <div className="blog-box">
        <BlogCardList blogList={blogList}/>
        <ContactCard />
      </div>
    </div>
  )
}

export default blogs