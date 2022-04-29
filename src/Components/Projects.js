import { Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Cropify',
    description: 'Crop scheduling app using the MERN stack',
    image: 'https://raw.githubusercontent.com/mcnairjm/react-portfolio/main/src/Assets/John/veggies.jpg',
    link: 'https://github.com/woffordlm/farm-app-crop-planner'
  },
  {
    title: 'Prost 4.0',
    description: 'Cocktail App for local restaurant ALley 26',
    image: 'https://raw.githubusercontent.com/mcnairjm/react-portfolio/main/src/Assets/John/alleysign2.jpg',
    link: 'https://github.com/polizoto/Prost_4.0',
  },
  {
    title: 'Budget Tracker',
    description: 'Budget tracker app utilizing PWA capabilities',
    image: 'https://raw.githubusercontent.com/mcnairjm/react-portfolio/main/src/Assets/John/budget-tracker.png',
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
    image: 'https://raw.githubusercontent.com/mcnairjm/react-portfolio/main/src/Assets/John/cocktail.jpg',
    link: 'https://github.com/mcnairjm/cocktail-app',
  },
  {
    title: 'Run Buddy',
    description: 'Static website, with advanced HTML & CSS',
    image: 'https://raw.githubusercontent.com/mcnairjm/react-portfolio/main/src/Assets/John/hero-bg.jpg',
    link: 'https://github.com/mcnairjm/run-buddy',
  }

]

const MyProject = () => {
  return (
    
    <div class='row'>
      {projects.map((project) => (
      <div class='col-sm-3'>
        <Card style={{ width: '18rem', height: '25rem',  }}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.description}
            </Card.Text>
            <a href={project.link} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">View Project</a>
          </Card.Body>
        </Card>
      </div>
    ))};
    </div>
  )
}
export default MyProject;