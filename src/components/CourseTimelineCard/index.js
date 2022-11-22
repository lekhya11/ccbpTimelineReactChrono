import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div>
      <div className="course-title-duration">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration-time">{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>
      <ul className="tagsList">
        {tagsList.map(eachTag => (
          <li className="items" key={eachTag.id}>
            <p className="tags">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
