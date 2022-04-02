import React from 'react'
import './services.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__header">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__header">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__header">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          <li>
            <BsPatchCheckFill className="service__list-icon" />
              <p>Lorem, upsum dolor sit amet constructor elite.</p>
          </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services