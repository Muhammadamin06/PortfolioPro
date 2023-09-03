import React from 'react'
import {BsLink45Deg} from 'react-icons/bs'
import { AiFillGithub } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import { projectList } from '../helpers'

function Projects() {
  return (
    <section id='projects' className='project'>
        <h3 className="title">Projects</h3>
        <p className="text">Things I've built lately</p>
        <div className="project__block">
          {
            projectList.map((card)=>(
              <Card key={card.id} style={{ width: '18rem' }} className='project__box'>
              <Card.Img variant="top" className='project__image' src={card.img} />
              <Card.Body>
                <Card.Title className='project__title'>{card.title}</Card.Title>
                <Card.Text className='project__text'>
                  {card.text}
                </Card.Text>
                <p className='project__type'>Tech stack : <span>{card.tech}</span></p>
                <div className="project__buttons">
                <button onClick={()=>window.location = card.link} className='project__btn'> 
                <BsLink45Deg /> <span>Live Preview</span>
                </button>
                <button onClick={()=>window.location = card.github} className='project__btn'>
                <AiFillGithub /> <span>View Code</span>
                </button>
                </div>
              </Card.Body>
            </Card>
            ))
          }
        </div>
    </section>
  )
}

export default Projects