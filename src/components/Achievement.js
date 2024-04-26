import { Container, Row, Col } from "react-bootstrap";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import "@sl-codeblaster/react-3d-animated-card/dist/index.css";
import { RiMedalLine } from "react-icons/ri";

const data = [
  {
    name: "Codechef",
    disc: "Highest Rating:- 1871 (4 star)",
    certificate: "https://www.codechef.com/users/born_psych",
    linkName: "born_psych",
  },
  {
    name: "Codeforce",
    disc: "Highest Rating:- 1316 (Pupil)",
    certificate: "https://codeforces.com/profile/Born_Psych",
    linkName: "Born_Psych",
  },
  {
    name: "Leetcode (Born_Psych)",
    disc: "Highest Rating:- 1565",
    certificate: "https://leetcode.com/Born_Psych/",
    linkName: "Born_psych",
  },
  {
    name: "Google Hash Code 2022",
    disc: "Ranked 2177 (AIR 653) globally out of 10200 participants",
    certificate:
      "https://clist.by/standings/hash-code-online-qualification-31261754/?country=IN&detail=true&find_me=40675030",
    linkName: "Serious_Headache",
  },
];

const data2 = [
  {
    name: "ICPC’21",
    disc: "Regionalist (Gwalior-Pune)",
    certificate: "",
    linkName: "",
  },
  {
    name: "Reply challenge 2022",
    disc: "Ranked 299 (AIR 60) globally in Reply challenge 2022",
    certificate:
      "https://clist.by/standings/coding-code-challenge-2022-33701856/?country=IN&detail=true&find_me=40890123",
    linkName: "coders_born_today ",
  },

  {
    name: "Codechef May Cook-Off 2022",
    disc: "Ranked 275 (AIR 238) globally in Codechef May Cook-Off 2022",
    certificate:
      "https://clist.by/standings/may-cook-off-2022-rated-for-all-34605155/?division=div_2&country=IN&detail=true&find_me=41989307",
    linkName: "born_psych",
  },
];

const data3 = [
  {
    name: "Google Kick Start Round B 2021",
    disc: "Ranked 1563 (AIR 844) globally out of 8000 participants",
    certificate:
      "https://clist.by/standings/kick-start-round-b-23074813/?country=IN&detail=true&find_me=33832557",
    linkName: "Born_psych",
  },
  {
    name: "Codechef December Lunchtime 2021",
    disc: "Ranked 137 (AIR 127) globally in Codechef December Lunchtime 2021",
    certificate:
      "https://clist.by/standings/december-lunchtime-2021-28099826/?division=div_2&country=IN&detail=true&find_me=38689156",
    linkName: "born_psych",
  },
];

const Achievement = () => {
  return (
    <>
      <section className="project" id="achievements">
        <Container>
          <Row>
            <Col size={12}>
              <h2>Achievements</h2>
              <p>...and more to come</p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <AnimatedCard
                  config={{
                    rotation: 400,
                    transition: {
                      duration: 1,
                      timingMode: "ease",
                    },
                  }}
                  style={{
                    width: "70%",
                  }}
                >
                  <div className="card">
                    <div className="figure">
                      <div className="figure_bg" /> // not required, just used
                      for design
                    </div>
                    <div className="content">
                      {data.map((i) => (
                        <p className={"body"} style={{ textAlign: "left" }}>
                          <RiMedalLine />
                          <h4 className="title" style={{ color: "black" }}>
                            {i.name}
                          </h4>
                          {i.disc}
                          <br />
                          <a href={`${i.certificate}`}>{i.linkName}</a>
                          <hr />
                        </p>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                  config={{
                    rotation: 400,
                    transition: {
                      duration: 1,
                      timingMode: "ease",
                    },
                  }}
                  style={{
                    width: "70%",
                  }}
                >
                  <div className="card">
                    <div className="figure">
                      <div className="figure_bg" /> // not required, just used
                      for design
                    </div>
                    <div className="content">
                      {data2.map((i) => (
                        <p className={"body"} style={{ textAlign: "left" }}>
                          <RiMedalLine />
                          <h4 className="title" style={{ color: "black" }}>
                            {i.name}
                          </h4>
                          {i.disc}
                          <br />
                          <a href={`${i.certificate}`}>{i.linkName}</a>
                          <hr />
                        </p>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>

                <AnimatedCard
                  config={{
                    rotation: 400,
                    transition: {
                      duration: 1,
                      timingMode: "ease",
                    },
                  }}
                  style={{
                    width: "70%",
                  }}
                >
                  <div className="card">
                    <div className="figure">
                      <div className="figure_bg" /> // not required, just used
                      for design
                    </div>
                    <div className="content">
                      {data3.map((i) => (
                        <p className={"body"} style={{ textAlign: "left" }}>
                          <RiMedalLine />
                          <h4 className="title" style={{ color: "black" }}>
                            {i.name}
                          </h4>
                          {i.disc}
                          <br />
                          <a href={`${i.certificate}`}>{i.linkName}</a>
                          <hr />
                        </p>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Achievement;
