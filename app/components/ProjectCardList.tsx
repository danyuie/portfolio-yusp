import React from 'react'
import ProjectCard from './ProjectCard'
import ContactCard from './ContactCard'

const ProjectCardList = ( props:any ) => {
  return (
    <div className='project-card-list'>
      {props.projectList.map((project:any, index:number) => (
        <React.Fragment>
            {index <= 8 ? <ProjectCard key={index} project={project.node} />: ''}
            {index == 5 ? <ContactCard />: ''}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProjectCardList