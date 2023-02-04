import ResponsiveAppBar from './pages/navbar/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import IdeaChain from './pages/idea_chain/IdeaChain';
import SignInSide from './pages/signup/sign_up_fix';
import Post from './pages/post/post';
import SignUp from './pages/signup/signUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
