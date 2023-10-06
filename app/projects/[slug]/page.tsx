"use client"
import ProjectDetail from '@/app/components/ProjectDetail';
import { getProjectDetails } from '@/services';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const projectDetail = (props: any) => {
  const [projectDetail, setProjectDetail] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps(props.params.slug);
  },[])

  const getStaticProps = async (params: any) => {
    const project:any = (await getProjectDetails(params)) || []
    setProjectDetail(project?.project)
  }
  // console.log(projectDetail)
  return (
    <div className='container-global project-detail'>
      <Image className='image' src={projectDetail.image?.url ? projectDetail.image?.url: ''} width={100} height={100} alt=''/>
      <div className="Heading-M bold title">{projectDetail.name}</div>

    </div>
  )
}

export default projectDetail