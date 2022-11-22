import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="container-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-and-duration">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar color="#171f46" />
          <p className="time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
