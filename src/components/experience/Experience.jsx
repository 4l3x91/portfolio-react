import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__header">
          <h3>FrontEnd Development</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Bootstrap</h4>
            <small>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>React</h4>
            <small>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>Tailwind</h4>
            <small>Basic</small>
            </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <div className="experience__header">
        <h3>BackEnd Development</h3>
          </div>
          <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>NodeJS</h4>
            <small>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>PHP</h4>
            <small>Basic</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>C#</h4>
            <small>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>MySQL</h4>
            <small>Intermediate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>MongoDB</h4>
            <small>Basic</small>
            </div>
            </article>
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Experience