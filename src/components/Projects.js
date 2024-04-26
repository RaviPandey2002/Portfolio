import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import portfolio1 from '../assets/img/portfolio1.png'
import codeEditor from '../assets/img/codeEditor.png'
import weatherApp from '../assets/img/weatherApp.png'
import codeXerox from '../assets/img/codeXerox.png'
import burgerBuilder from '../assets/img/burgerBuilder.png'
import cureit from '../assets/img/cureit.png'
import vegetableStore from '../assets/img/vegetable-store.png'
import dashboard from '../assets/img/dashboard.png'
import meme from '../assets/img/meme.png'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: 'Portfolio website',
      description:
        'Beautiful portfolio Website made with pure HTML, CSS and JavaScript',
      imgUrl: portfolio1,
      projectLink: 'https://bornpsych.github.io/personal-website/',
      githubLink: 'https://github.com/BornPsych/personal-website',
    },
    {
      title: 'Code editor',
      description:
        'Used to write HTML, CSS and Javascript code and run simultaneously',
      imgUrl: codeEditor,
      projectLink: 'https://bornpsych.github.io/Online-Code-Editor/',
      githubLink: 'https://github.com/BornPsych/Online-Code-Editor',
    },
    {
      title: 'Weather App',
      description: 'Made with HTML, CSS, Node, Express and REST API',
      imgUrl: weatherApp,
      projectLink: '',
      githubLink: 'https://github.com/BornPsych/Weather.ly',
    },
    {
      title: 'Code Xerox',
      description:
        'A collaborative code editor with live code sharing and video calling',
      imgUrl: codeXerox,
      projectLink: '',
      githubLink: 'https://github.com/BornPsych/code-xerox-v1',
    },
    {
      title: 'Burger builder',
      description: 'A burger ordering website',
      imgUrl: burgerBuilder,
      projectLink: 'https://react-my-burger-d1fc3.web.app/',
      githubLink: 'https://github.com/BornPsych/Burger-Bites',
    },
    {
      title: 'Cure It',
      description: 'A symptom Analyser that tells disease',
      imgUrl: cureit,
      projectLink: '',
      githubLink: 'https://github.com/BornPsych/Cure-it',
    },
    {
      title: 'FoodStore',
      description: 'A full fledged vegetable store made with react',
      imgUrl: vegetableStore,
      projectLink: 'https://gilded-crostata-0ae08c.netlify.app/',
      githubLink: 'https://github.com/BornPsych/foodstuffs_store-main',
    },
    {
      title: 'Admin Dashboard',
      description:
        'A dashboard with sales, revenue, client etc information made with react ',
      imgUrl: dashboard,
      projectLink: 'https://harmonious-fox-66d801.netlify.app/',
      githubLink: 'https://github.com/BornPsych/react-admin-dashboard',
    },
    {
      title: 'Meme generator',
      description: 'A meme generator App with react JS',
      imgUrl: meme,
      projectLink: 'https://moonlit-gumption-c931cb.netlify.app/',
      githubLink: 'https://github.com/BornPsych/Meme-generator',
    },
  ]

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I show you to all the big and small websites I have done so
                    far
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    ></Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey='section'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}
