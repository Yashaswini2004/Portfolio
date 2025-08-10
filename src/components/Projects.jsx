import React from "react"
export default function Projects(){
    return (
        <section id="projects" className="projects-component">
            <div className="project">
               <h4>Shofity WEBSITE</h4>
               <p> It is a e-commerce website where user can shop the items</p>
               <div className="project-btn">
                  <button>Git Repo</button>
                  <button>Demo</button>
               </div>
               
            </div>
            <div  className="project">
               <h4>Project management App</h4>
               <p>It is a tool where you can add the project and respective tasks to the project</p>
                <div className="project-btn">
                  <button>Git Repo</button>
                  <button>Demo</button>
               </div>
            </div>
            <div  className="project">
                <h4>Investment Calculator</h4>
                <p>It is a special calculator where user can calculate the profit and loss</p>
                <div className="project-btn">
                  <button>Git Repo</button>
                  <button>Demo</button>
               </div>
            </div>
        </section>
    )
}