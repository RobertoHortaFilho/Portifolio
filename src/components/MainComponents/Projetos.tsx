import Image from 'next/image'
import './projetos.css'
import projectData from '@/utils/projectsData'

const Projetos = () => {
  return (
    <div>
      {projectData.map(project => (
        <section className='projectContainer' key={project.title}>
          <h5 className='projectTitle'>{project.title}</h5>
          <div className='projectImageContainer'>
            <Image
              className='projectImage'
              alt={project.title}
              src={project.src}
              width={1024}
              height={600}
            />
          </div>
          <p className='projectDesc'>{project.desc}</p>
          <a className='buttonRedirect' target='_blank' href={project.link}>
            <p className='buttonRedirectText'>Ver codigo</p>
          </a>
          {project.live && (
            <a className='buttonSite' target='_blank' href={project.live}>
              <p className='buttonRedirectText'>Ver site</p>
            </a>
          )}
          <div className='HtmlLine spacingTop' />
        </section>
      ))}
    </div>
  )
}

export default Projetos
