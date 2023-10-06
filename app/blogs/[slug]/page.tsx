"use client"
import { getBlogDetails } from '@/services';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'


const page = (props: any) => {
  const [blogDetail, setBlogDetail] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps(props.params.slug);
  },[])

  const getStaticProps = async (params: any) => {
    const project:any = (await getBlogDetails(params)) || []
    setBlogDetail(project?.post)
  }
  // console.log()
  blogDetail.catelories?.map((project:any, index:number) => {
    console.log(project)
  })
  return (
    <div className='container-global blogdetail'>
      <div className="header">
        {blogDetail.catelories?.map((project:any, index:number) => {
            return (
              <div key={index} className="Heading-XXS bold tag">{project.name}</div>
            )
          })}
        <div className="Heading-M semi-bold heading">{blogDetail.title}</div>
        <div className="grp">
          <div className="item">
            <Image src='/calendar.svg' width={24} height={24} alt=''/>
            <div className="Text-S medium">{moment(blogDetail.createdAt).format('MMM DD, YYYY')}</div>
          </div>
          <div className="item">
            <Image src='/share.svg' width={24} height={24} alt=''/>
            <div className="Text-S medium">Share</div>
          </div>

        </div>
      </div>
      <div className="image"><Image src={blogDetail.featuredImage?.url} width={1292} height={686} alt=''/></div>
      <div className="content">
        {parse(blogDetail.content?.html ? blogDetail.content?.html :'')}
      </div>
    </div>
  )
}

export default page