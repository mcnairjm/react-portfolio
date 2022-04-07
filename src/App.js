import './App.css';
import About from './Components/About';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navigation />
      <main>
          <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
