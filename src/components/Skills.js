import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const skills = [
    {
      name: 'C++',
      meter: 80,
    },
    {
      name: 'Javascript',
      meter: 75,
    },
    {
      name: 'MYSQL',
      meter: 70,
    },
    {
      name: 'MongoDB',
      meter: 80,
    },
    {
      name: 'AWS (RDS, DynamoDB)',
      meter: 70,
    },
    {
      name: 'React.js',
      meter: 85,
    },
    {
      name: 'Node.js',
      meter: 90,
    },
    {
      name: 'Express.js',
      meter: 80,
    },
    {
      name: 'Git',
      meter: 85,
    },
    {
      name: 'Github',
      meter: 90,
    },
    {
      name: 'Postman',
      meter: 80,
    },
    {
      name: 'AWS (Lambda, S3, VPC)',
      meter: 70,
    },
  ]

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>About Skills</h2>
              <p>
                I have learned different programming languages ​​so far and as
                far as my skills are concerned<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                {skills.map((i) => (
                  <div key={i.name} className='item' style={{ width: '100%' }}>
                    <div
                      style={{ width: '20vh', height: '20vh', margin: 'auto' }}
                    >
                      <CircularProgressbar
                        value={i.meter}
                        text={`${i.meter}%`}
                        styles={{
                          path: {
                            stroke: `#893392`,
                          },
                          text: {
                            fill: '#ffff',
                            fontSize: '16px',
                          },
                        }}
                      />
                    </div>
                    <h5>{i.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}
