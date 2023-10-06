import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = (props:any ) => {
  const [project, setProject] = useState(props.project)
  // console.log(project)
  return (
    <div className='project-card'>
      <Link href={`/projects/${project.slug}`}><Image className='image' src={project.image.url} alt='' width={420} height={259} /></Link>
    </div>
  )
}

export default ProjectCard