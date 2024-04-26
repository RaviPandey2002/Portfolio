import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo192.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{height:"20vh",width:"20vh",marginTop:"2%"}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://github.com/BornPsych"><GitHubIcon sx={{color:"white"}}/></a>
                <a href="https://www.linkedin.com/in/yogesh-shahi/"><LinkedInIcon sx={{color:"white"}}/></a>
                <a href="https://api.whatsapp.com/send?phone=8273583528&text=Happy%20to%20connect%20you"><WhatsAppIcon sx={{color:"white"}}/></a>
              </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
