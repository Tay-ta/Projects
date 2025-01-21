import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="profileCard.jpg" alt="profilePhoto" />;
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill)=> (
       <Skill skill={skill.skill} level={skill.level} color={skill.color}/> 
      ))}
  
    </div>
  );
}
function Skill({skill, level, color}) {
  return (
    <div className="skill" style={{ background: color }}>
      {skill}
      {level === "advanced" && "💪"}
      {level==="intermediate" &&"👌"}
      {level==="beginner" && "👶"}

    </div>
  );
}

function Intro() {
  return (
    <div className="body">
      <h1>Lucie Lu</h1>
      <p>
        Fron-end web developer, I like go to gym and hiking, travel! I like to
        try new things and different foods!
      </p>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;

