import ResponsiveAppBar from './pages/navbar/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import IdeaChain from './pages/idea_chain/IdeaChain';

import Post from './pages/post/post';
import SignUp from './pages/signup/signUp';
import Home from './pages/home/home';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ideachain_test" element={<IdeaChain />} />
          <Route path="/responsivebar_test" element={<ResponsiveAppBar />} />

          <Route path="/sign_up_test" element={<SignUp />} />
          <Route path="/post_test" element={<Post />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

 
export default App;
