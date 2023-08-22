// import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import Sushi from "./sushi02.jpg";
import Dongburi from "./Dongburi.webp";
import Tonkut from "./Tonkut.webp";
import Selmon from "./Selmon.webp";

export function Layout() {
  return (
    <nav className="container-fluid p-3 Bgo text-white text-center row">
      <img src={Sushi} alt="Logo" className="photo rounded-circle" />
      <NavLink
        to="/"
        className="link px-2 col-sm-2 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าหลัก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2 col-sm-1 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

export function Footer() {
  return (
    <div class="container-fluid Bgo p-3 mt-5 text-center">
      <nav class="row">
        <div className="col-sm-2 mt-2">
          <h3 className="Editfo siligon01">@ 2023</h3>
        </div>
        <div className="col-sm-3 mt-2 siligon02">
          <h3 className="Editfo siligon02">ผู้จัดทำ : Thanapat Piyawoong</h3>
        </div>
        <div class="col-sm-5 ">
          <></>
        </div>
        <div className="col-sm-2 mt-2 siligon02">
          <h3 className="Editfo">Back to top</h3>
        </div>
      </nav>
    </div>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div class="container mt-5">
        <div class="row">
          <div className="polygon col-sm-12 p-2 text-center">
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={Tonkut}
              alt="Tonkut"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ข้าวหมูทอดทงคัตสึ</h3>
            <p className="Lumideim p-2">
              หมูทอดทงคัตสึ แกงกะหรี่ ราเมน ทาโกะยากิ ไก่คาราอาเกะ
              ไปจนถึงของหวานยอดฮิตอย่าง ไดฟูกุ โมจิ หรือ โดรายากิ รวม ๆ แล้วกว่า
              15 เมนู รับรองว่า แต่ละสูตร ทำได้เองง่าย ๆ ไม่ต้องบินไปถึงญี่ปุ่น
              ก็อร่อยฟินได้ทุกวันแน่นอน หากอยากรู้ว่า มีอะไรบ้างแล้วละก็
              เตรียมจับกระทะ จับตะหลิว แล้วตามมาดูกันเลย{" "}
            </p>
            <a
              class="button btn btn-secondary Alumineam"
              href="Food01.js"
              type="button"
            >
              ดูวิธีทำ>>
            </a>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={Dongburi}
              alt="Dongburi"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ข้าวหน้าเนื้อดงบุริ</h3>
            <p className="Lumideim p-2">
              สูตร ข้าวหน้าเนื้อ สไตล์ เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง Chef
              Bas Fast Food ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ เลยก็ว่าได้
              โดยเฉพาะในส่วนของซอสผัด ที่ใช้น้ำซุปดาชิ มิริน และ ซอสโชยุ
              เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ ทำตามสูตรนี้ได้เลย
              รับรองว่า ไม่ผิดหวัง{" "}
            </p>
            <button type="button" class="btn btn-secondary Alumineam">
              ดูวิธีทำ>>
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={Selmon}
              alt="Selmon"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ซูชิหน้าปลาแซลม่อน</h3>
            <p className="Lumideim p-2">
              ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่น ยอดฮิต
              ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู โดยเฉพาะ ซูชิหน้าปลาแซลม่อน
              ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก
              เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ
              แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก
              ทานได้แล้ว{" "}
            </p>
            <button type="button" class="btn btn-secondary Alumineam">
              ดูวิธีทำ>>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
