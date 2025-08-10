import React from "react";
import logo from "../assets/logo.jpg";
export default function Home(){
    return (
        <section id="home">
        <div className="home-container">
         <h1>Hey, I'm Yashaswini C</h1>
         <h1>I'm a <span>full-stack developer</span>💻🌐</h1>
         <p> a passionate full-stack developer, eager to keep learning and building impactful projects.Based in <span>Tumkur, India</span>. </p>
        <p> I have completed an internship at <span>Quest Informatics</span>as a <span>Full-Stack Development Intern.</span></p>
         <div className="exp-container">
            <div className="exp-container1">
            <h1>Experience</h1>
            <button onClick={()=>window.open('/Yashaswini C.pdf',"_blank")}>View Resume</button>
            </div>
            <p>Worked as a fullstack development intern at Quest Informatics</p>
            <div className="company">
                <hr/>
                <h2>Oct'24-Dec'24</h2>
                <div className="company1">
               <img src={logo} alt="Logo" />
               <p>Quest informatics pvt ltd, Rajajinagar, bangalore</p>
            
               </div>
                  <hr/>
            </div>
         </div>
         </div>
        </section>
    )
}