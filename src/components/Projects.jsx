import React from "react"
export default function Projects(){
    return (
        <section id="projects" className="projects-component">
            <div className="project">
               <h4>Food Blog App</h4>
               <p>This is mern stack food recipe blog app whre user can get the food recipe instruction and ingredients.</p>
               <div className="project-btn">
                  <a href="https://github.com/Yashaswini2004/food_recipe_blog.git" target="_blank">Git Repo</a>
                  <a  href="" target="_blank">Demo</a>
               </div>
               
            </div>
            <div  className="project">
               <h4>Project management App</h4>
               <p>It is a tool where you can add the project and respective tasks to the project</p>
                <div className="project-btn">
                  <a  href="https://github.com/Yashaswini2004/project_management_App.git" target="_blank">Git Repo</a>
                  <a  href="" target="_blank">Demo</a>
               </div>
            </div>
            <div  className="project">
                <h4>Delites-food ordering</h4>
                <p>It is a good food ordering website</p>
                <div className="project-btn">
                  <a  href="https://github.com/Yashaswini2004/Food_Ordering.git" target="_blank">Git Repo</a>
                  <a  href="" target="_blank">Demo</a>
               </div>
            </div>
        </section>
    )
}