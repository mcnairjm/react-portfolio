import { Card, Button } from 'react-bootstrap';
import Alley21 from '../Assets/John/alleysign2.jpg'
import Budget from '../Assets/John/budget-tracker.png'
import Cocktail from '../Assets/John/cocktail.jpg'
import Run from '../Assets/John/hero-bg.jpg'

const projects = [
  {
    title: 'Prost 4.0',
    description: 'Cocktail App for local restaurant ALley 26',
    image: {Alley21},
    link: 'https://github.com/polizoto/Prost_4.0',
  },
  {
    title: 'Budget Tracker',
    description: 'Budget tracker app utilizing PWA capabilities',
    image: {Budget},
    link: 'https://github.com/mcnairjm/budget-tracker',
  },
  {
    title: 'Work Day Scheduler',
    description: 'Schedule app that utilizes local storage',
    image: 'https://user-images.githubusercontent.com/93609597/146433053-3ae070c5-6f43-4c50-af37-46d04952db28.png',
    link: 'https://github.com/mcnairjm/work-day-scheduler',
  },
  {
    title: 'Cocktail Search App',
    description: 'Allows users to search and save cocktails, with a randomizer feature',
    image: {Cocktail},
    link: 'https://github.com/mcnairjm/cocktail-app',
  },
  {
    title: 'Run Buddy',
    description: 'Static website, with advanced HTML & CSS',
    image: {Run},
    link: 'https://github.com/mcnairjm/run-buddy',
  }

]

const MyProject = () => {
  return (
    projects.map((project) => (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <a href={project.link} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">View Project</a>
      </Card.Body>
    </Card>
    ))
  )
}
export default MyProject;