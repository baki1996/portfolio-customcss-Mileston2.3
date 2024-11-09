import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="projects">
      <h2 className='section-title'>My Projects</h2>

      <div className="project-grid">

        <div className="Event Planner">
          <Image src={"/images/bg.png"} alt='project image' height={400} width={250}/>
          <h3>Event Planner WabPage</h3>
          <p>Creating unforgettable memories, one event at a time.
                    Making your dream event a reality.
                   Exceptional events, extraordinary experiences.
                  Where creativity meets perfection</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"https://event-planner-web-page-milestone2-1.vercel.app/"} target='_blank'>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/baki1996/Event-planner-web-page-Milestone2.1.git"} target='_blank'>Github Link</Link></div>
          </div>
        </div>

        <div className="figma project">
          <Image src={"/images/figma.png"} alt='project image' height={200} width={200}/>
          <h3>Figma Project</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quisquam eveniet dignissimos. Debitis sapiente deleniti saepee repellat.</p>
          <div className="btn-group">
            <div className="btn"><Link className='Link' href={"ttps://assigment-4-blond.vercel.app/"} target='_blank'>Live Demo</Link></div>
            <div className="btn"><Link className='Link' href={"https://github.com/baki1996/Assigment-4.git"} target='_blank'>Github Link</Link></div>
          </div>
        </div>


        <div className="project-card">
          <Image src={"/images/resume.png"} alt='project image' height={500} width={500}/>
          <h3>Resume Builder</h3>
          <p>Life isn't about getting and having, it's about giving and being. 
        Whatever the mind of man can conceive and believe, it can achieve. 
            Strive not to be a success, but rather to be of value. </p>
          <div className="btn-group">
            <div className="btn"> <Link className='Link' href={"https://hackathon-milestone3-resume-builder.vercel.app/"} target='_blank'>live Demo</Link></div>

            <div className="btn" > <Link className='Link' href={"https://github.com/baki1996/Hackathon-Milestone3-resume-builder.git"} target='_blank'>Github Link</Link> </div>
          </div>
        </div>



      </div>
    </section>
  )
}

export default Projects