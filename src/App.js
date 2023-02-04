import ResponsiveAppBar from './pages/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import IdeaChain from './pages/idea_chain/IdeaChain';
import MarkdownViewer from './pages/markdown_viewer/MarkdownViewer';
import MonacoEditor from './pages/monaco_editor/MonacoEditor';

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
