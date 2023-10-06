"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import { getProject } from './../../services/index';
import ProjectCardList from './ProjectCardList';

const Project = () => {

  const [projectList, setProjectList] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps();
  },[])

  const getStaticProps = async () => {
    const project:any = (await getProject()) || []
    setProjectList(project?.projectsConnection.edges)
  }
  return (
    <div className='project space-global'>
      <SectionHeading
        slug='/projects'
        tag='Featured Projects' 
        headingDark='3D Character'
        headingGrey="Modeling and Texturing Projects We're Proud of"/>
      <div className="project-box">
        <div className="project-box_cart">
          <ProjectCardList projectList={projectList} />
        </div>
        
      </div>
    </div>
    
  )
}

export default Project
