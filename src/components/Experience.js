import { Container, Row, Col } from "react-bootstrap";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience = () => {
  return (
    <section className="project" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Experience</h2>
            <p>My experience till now.</p>
            <ExperienceTimeline />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
