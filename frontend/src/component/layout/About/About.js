import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/aditya-prakash-pandewa-b3628718b/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dfmcrkrxf/image/upload/v1657366516/logo_l8vhjl.png"
              alt="Founder"
            />
            <Typography>Aditya Prakash Pandewa</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is an ecommerce website made by Aditya Prakash Pandewa as a side project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Socials</Typography>
            <a
              href="https://www.linkedin.com/in/aditya-prakash-pandewa-b3628718b/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://github.com/Aditya0523" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

