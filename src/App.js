import './App.css';
import About from './Pages/About'
import Navigation from './Components/Nav';
import Footer from './Components/Footer';
import ProjectsPage from './Pages/ProjectsPage';
import ResumePage from './Pages/Resume';
import Contact from './Pages/ContactPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <Routes>
            <Route path ='/' element={<About/>} />
            <Route path ='/projects' element={<ProjectsPage/>} />
            <Route path = '/about' element={<About/>} />
            
            <Route path ='/resume' element={<ResumePage/>} />
            <Route path ='/contact' element={<Contact/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
