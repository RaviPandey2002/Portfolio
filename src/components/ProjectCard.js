import { Col } from 'react-bootstrap'

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectLink,
  githubLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {console.log(title, projectLink)}
          <a href={`${projectLink}`} style={{ color: 'black' }}>
            Project Link
          </a>
          <br />
          <a href={`${githubLink}`} style={{ color: 'black' }}>
            Github Link
          </a>
        </div>
      </div>
    </Col>
  )
}
