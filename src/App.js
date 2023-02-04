import ResponsiveAppBar from './pages/navbar/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import IdeaChain from './pages/idea_chain/IdeaChain';
import MarkdownViewer from './pages/markdown_viewer/MarkdownViewer';
import MonacoEditor from './pages/monaco_editor/MonacoEditor';
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
          <Route path="/markdown_test" element={<MarkdownViewer />} />
          <Route path="/monaco_test" element={<MonacoEditor />} />
          <Route path="/sign_up_test" element={<SignUp />} />
          <Route path="/post_test" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
