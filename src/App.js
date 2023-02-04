import ResponsiveAppBar from './pages/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import IdeaChain from './pages/idea_chain/IdeaChain';
import HJXTest from './common/services/db/hjxTest';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideachain_test" element={<IdeaChain />} />
          <Route path="/responsivebar_test" element={<ResponsiveAppBar />} />
          <Route path="/hjx" element={<HJXTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
