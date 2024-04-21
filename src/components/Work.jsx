import React from 'react'
import Project from './Project'
import { getProjects } from '../api'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Work(){
    const [projects,setProjects] = React.useState([]);
    
    const half = projects.length/2;
    const projectsFirstHalf = projects.slice(0,half)
    const projectsSecondHalf = projects.slice(half)


    React.useEffect(()=>{
        // AOS.init();
        async function loadProjects(){
            try{
                const data = await getProjects()
                setProjects(data)
            }catch(err){
                console.log(err)
            }
        }
        loadProjects()
    },[])
    const projectElements =projects.map(project=>(
        <Project
            title = {project.title}
            description = {project.description}
            tools = {project.tools}
            imageUrl = {project.imageUrl}
            url = {project.url}
            key = {project.title}
        />
    ))
    const projectElementsLeft =projectsFirstHalf.map(project=>(
        <Project
            title = {project.title}
            description = {project.description}
            tools = {project.tools}
            imageUrl = {project.imageUrl}
            url = {project.url}
            key = {project.title}
        />
    ))
    const projectElementsRight = projectsSecondHalf.map(project=>(
        <Project
            title = {project.title}
            description = {project.description}
            tools = {project.tools}
            imageUrl = {project.imageUrl}
            url = {project.url}
            key = {project.title}
        />
    ))
    return(
        <>
        
        <div className = 'work-ctn' id='work'>
            <h3
                data-aos="fade-up"
                data-aos-duration='1000'
                data-aos-easing = 'ease-in-sine'
            >
            My Work
            </h3>
            <div className='projects-ctn'>
                <div 
                    className = 'work-left'
                    data-aos="fade-up"
                    data-aos-duration='1000'
                    data-aos-easing = 'ease-in-sine'
                    // data-aos-offset = '250'
                >
                    {projectElementsLeft}
                </div>
                <div 
                    className = 'work-right'
                    data-aos="fade-up"
                    data-aos-duration='1000'
                    data-aos-easing = 'ease-in-sine'
                    // data-aos-offset = '300'
                >
                    {projectElementsRight}
                </div>
            </div>
        
        </div>
        </>
    )
}