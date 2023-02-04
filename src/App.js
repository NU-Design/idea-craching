import ResponsiveAppBar from './pages/ResponsiveAppBar';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import IdeaChain from './pages/idea_chain/IdeaChain';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <ResponsiveAppBar />
      </React.Fragment>
    );
  }
}
 
export default App;
