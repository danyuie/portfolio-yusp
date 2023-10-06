"use client"
import React, { useEffect, useState } from 'react'
import { ContentNavgativeProject } from '../constants';
import Link from 'next/link';
import ProjectCardList from '../components/ProjectCardList';
import { getProject } from '@/services';


const page = () => {
  const [projectList, setProjectList] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps();
  },[])

  const getStaticProps = async () => {
    const project:any = (await getProject()) || []
    setProjectList(project?.projectsConnection.edges)
  }
  return (
    <div className='container-global project-page'>
      <div className='heading' >
        <span className="Heading-L semi-bold  ">Our Project</span>
        <div className="grp-button">
        {ContentNavgativeProject.map((link) =>
          (<Link
            className='Text-Tag bold button-project'
            href={link.href} key={link.key}>
              {link.text}
            </Link>))}
        </div>
      </div>
      <div className="project-box_cart">
          <ProjectCardList projectList={projectList} />
      </div>
      <div className="Heading-M semi-bold about">We were founded in 2021 by DAN and Yuki, two experienced 3D artists with a passion for using technology to bring creativity to life.</div>
    </div>
  )
}

export default page