import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"July-2022 - Present"}
            title={"Assistant System Engineer"}
            subTitle={"TCS"}
            text={"Currently Completed my Java Training"}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2018-2022"}
            title={"Computer Science and Engineering"}
            subTitle={"SRM University"}
            text={"B.Tech In Computer Science"}
            state={"Chennai"}
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"Senior Secondary School"}
            subTitle={"Lalchand Milapchand Dadha Senior Secondary School"}
            state={"Chennai"}

            // text={"Computer Science  "}
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"Higher Secondary School"}
            subTitle={"Lalchand Milapchand Dadha Senior Secondary School"}
            state={"Chennai"}

            // text={" "}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
