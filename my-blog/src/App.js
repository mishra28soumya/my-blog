import './App.css';
import Home from "./pages/Home.js";
import About from './pages/About.js';
import ArticlesList from './pages/ArticlesList.js';
import ArticleDetail from './pages/ArticleDetail.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/articleslist" element={<ArticlesList/>}/>
          <Route path="/articledetail/:name" element={<ArticleDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
