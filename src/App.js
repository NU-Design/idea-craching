import ResponsiveAppBar from './pages/navbar/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import IdeaChain from './pages/idea_chain/IdeaChain';
import MarkdownViewer from './pages/markdown_viewer/MarkdownViewer';
import MonacoEditor from './pages/monaco_editor/MonacoEditor';
import Post from './pages/post/post';
import SignUp from './pages/signup/signUp';
import Home from './pages/home/index';
import AboutUs from './pages/about_us';
import Editor from './pages/editor/index';
import SignIn from './pages/sign_in/combined';
import Profile from './pages/profile';
import NotFound from './pages/not_found';
import HJXTest from './common/services/db/hjxTest';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idea_chain_test" element={<IdeaChain />} />
          <Route path="/about_us_test" element={<AboutUs />} />
          <Route path="/editor_test" element={<Editor />} />
          <Route path="/home_test" element={<Home />} />
          <Route path="/sign_in_test" element={<SignIn />} />
          <Route path="/profile_test" element={<Profile />} />
          <Route path="/sign_up_test" element={<SignUp />} />
          <Route path="/post_test" element={<Post />} />
          <Route path="/hjx" element={<HJXTest />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
