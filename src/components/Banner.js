import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = ['Web Developer', 'Competitive Programmer']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex((prevIndex) => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(500)
    } else {
      setIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Yogesh Shahi`}
                    <span
                      className='txt-rotate'
                      dataPeriod='1000'
                      data-rotate='[ "Web Developer", "Web Designer"]'
                    >
                      {'\n'}
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am an undergraduate student at Indian Institute of
                    information technology. I specialize in MERN stack and
                    currently learning AWS. I also love competitive programming,
                    recently My team also qualified for ICPC Regionals gwalior.
                    I believe I am a good communicator which has helped me take
                    on various leadership roles in my college as I was president
                    of the management club college.
                  </p>
                  <p>
                    <a
                      href='https://drive.google.com/file/d/1MClrZHjg3ohyuUOhEfZZ34hwPgXX91t1/view?usp=share_link'
                      target='_blank'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <button className='tagline'>Download Resume</button>
                    </a>
                    &nbsp;&nbsp;
                    <a
                      href='https://drive.google.com/file/d/19GfZpzMEnBBgc7ER3v__r_vFXR2wPovR/view?usp=sharing'
                      target='_blank'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <button className='tagline'>Download Cover letter</button>
                    </a>
                  </p>

                  <a
                    href='#connect'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
