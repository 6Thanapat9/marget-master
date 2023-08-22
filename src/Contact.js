import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Footer } from "./App";
import ReactDOM from "react-dom/client";
import "./App.css";
import PAI1 from "./PAI1.jpg";

function Full() {
  return (
    <>
      <Layout />
      <div className="">
        <nav class="row">
          <div className="col-sm-3">
            <></>
          </div>

          <div className="col-sm-5">
            <Contact />
          </div>

          <div class="col-sm-4 ">
            <></>
          </div>
        </nav>
      </div>
      <Footer />
    </>
  );
}

function Contact() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Ai" emoji="🤖" color="red" />
      <Skill skill="Python" emoji="👍🏻" color="orange" />
      <Skill skill="Html" emoji="👶🏻" color="yellow" />
      <Skill skill="Css" emoji="🤏🏼" color="cyan" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายธนภัทร ปิยะวงษ์</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชื่นชอลในการใช้คอมพิวเตอร์ การเขียนโปรเเกรม
        การเขียนเว็ป งานอดิเรก ฟังเพลง อ่านหนังสือ และเล่นเกม
      </p>
    </div>
  );
}

function Avatar() {
  return <img src={PAI1} alt="PAI1" className="img-thumbnail" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

export default Full;
