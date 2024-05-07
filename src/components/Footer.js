import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/apple-icon-180x180.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={10} sm={2}>
            <img src={logo} alt="Logo" style={{height:"8vh",width:"8vh",marginTop:"2%"}}/>
          </Col>
          <Col size={10} sm={10} className="text-center text-sm-end" style={{marginTop:"2%"}}>
          <div className="social-icon">
                <a href="https://github.com/RaviPandey2002"><GitHubIcon sx={{color:"white"}}/></a>
                <a href="https://www.linkedin.com/in/ravi-pandey-52a20b217/"><LinkedInIcon sx={{color:"white"}}/></a>
                <a href="https://api.whatsapp.com/send?phone=9520243316&text=Happy%20to%20connect%20you"><WhatsAppIcon sx={{color:"white"}}/></a>
              </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
