import React, { useState, useEffect } from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
  }, []);


  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">

      </div>
      <Button text={"More Projects"} className="project-button" href="https://github.com/paraswatts" newTab={true} />
    </div>
  );
}
