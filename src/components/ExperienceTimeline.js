import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceContent from "./ExperienceContent";

const ExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      <ExperienceContent />
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
