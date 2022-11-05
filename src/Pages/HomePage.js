import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import CodeIcon from "@material-ui/icons/Code";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Rishon Kumar Rahi</span>
        </h1>
        <h2>
          {/* TODO: About me */}
          I'm currently working at Assistant System Engineer at TCS. Currently
          I'm focused on building my Front-End Skills and improving my Data
          Structure and Algorithms . I love problem solving. I am also learning
          Back-End technology ExpressJS
        </h2>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/rishon-kumar-916841185/"
            className="icon i-facebook"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/rishonkumar?tab=repositories"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a href="https://twitter.com/RishonKumar" className="icon i-github">
            <TwitterIcon />
          </a>
          <a
            href="https://leetcode.com/rishonkumar3/"
            className="icon i-github"
          >
            <CodeIcon />
          </a>
          {/* TODO: Coding profile links */}
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
