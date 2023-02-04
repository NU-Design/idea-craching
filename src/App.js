import ResponsiveAppBar from './pages/navbar/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import IdeaChain from './pages/idea_chain/IdeaChain';
import Post from './pages/post/post';
import SignUp from './pages/signup/signUp';
import Home from './pages/home/home';
import AboutUs from './pages/about_us';
import Editor from './pages/editor/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/idea_chain_test" element={<IdeaChain />} />
          <Route path="/about_us_test" element={<AboutUs />} />
          <Route path="/editor_test" element={<Editor />} />
          <Route path="/home_test" element={<Home />} />
          <Route path="/profile_test" element={<IdeaChain />} />
          <Route path="/sign_up_test" element={<SignUp />} />
          <Route path="/post_test" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

 
export default App;
