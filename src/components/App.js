import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';
import Redirect from './Redirect';
import redirects from '../data/redirects';
import FirebaseInitialize from './FirebaseInitialize';
import AllProjects from './AllProjects';

function App() {
  return (
    <>
      <NavBar />
      <FirebaseInitialize />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/AllProjects' element={<AllProjects />} />
        <Route path='*' element={<Redirect url="/" />} />
        {
          redirects.map((item) => (
            <Route key={item.page} path={item.page} element={<Redirect url={item.redirectTo} />} />
          ))
        }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
