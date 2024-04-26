import { VerticalTimelineElement } from "react-vertical-timeline-component";
import company_img from "../assets/img/tralexho-img.png";

const ExperienceContent = () => {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background:
            "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight:
            "7px solid linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
        }}
        date="Jan-2022 - May-2022"
        iconStyle={{
          background:
            "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <h3 className="vertical-timeline-element-title">
              Software Engineering Intern
            </h3>
            <h6 className="vertical-timeline-element-subtitle">
              (Tech Stack - AWS Lambda, DynamoDB, S3 bucket)
            </h6>
            <p style={{ width: "100%", textAlign: "left" }}>
              Worked in the core development team to build different end-points
              in the backend. Worked on Serverless function, Cloud formation,
              and Non-relational databases in AWS. Contributed majorly to
              launching the next phase of MVP.
            </p>
          </div>
          <img
            src={company_img}
            style={{ height: "15vh", width: "15vw" }}
          ></img>
        </div>
      </VerticalTimelineElement>
    </>
  );
};

export default ExperienceContent;
