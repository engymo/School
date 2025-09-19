import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Hero from './Pages/HeroSection/Hero';
import HeroCards from './Pages/Categories/HeroCards';
import Layout from './Pages/Layout/Layout';
import Categories from './Pages/Categories/Categories';
import AllCatogries from './Pages/Categories/AllCatogries';
import Course from './Pages/Courses/Course';
import WhatsNew from './Pages/WhatsNew/WhatsNew';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Hero-cards" element={<HeroCards />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Categories/AllCatogries" element={<AllCatogries />} />
          <Route path="/Course" element={<Course />} />
          <Route path='/WhatsNew' element= {<WhatsNew/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

