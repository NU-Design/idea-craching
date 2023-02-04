import ResponsiveAppBar from './pages/navbar/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import IdeaChain from './pages/idea_chain/IdeaChain';
import MarkdownViewer from './pages/markdown_viewer/MarkdownViewer';
import MonacoEditor from './pages/monaco_editor/MonacoEditor';
import Post from './pages/post/post';
import SignUp from './pages/signup/signUp';
import Home from './pages/home/home';
import AboutUs from './pages/about_us';
import Editor from './pages/editor/hjx/editor';
import SignIn from './pages/sign_in/combined';
import NotFound from './pages/not_found';
import HJXTest from './common/services/db/hjxTest';
import { MarkerSeverity } from 'monaco-editor';
import Profile from './pages/profile/profile';
import IdeaCard from './common/components/IdeaCard';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/idea_chain" element={<IdeaChain />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/post_test" element={<Post />} />
          <Route path="/hjx" element={<Editor />} />

          <Route path="/id_card" element={<IdeaCard />} />

          <Route path="/*" element={<SignIn />} />

          <Route
            path="/md_test"
            element={<MarkdownViewer markdown="# 123" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
