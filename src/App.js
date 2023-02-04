import React, { Component } from 'react';
import ResponsiveAppBar from './pages/ResponsiveAppBar';
import PostCard from './common/components/PostCard';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <React.Fragment>
          <ResponsiveAppBar />
        </React.Fragment>
        <PostCard/>
      </div>
    );
  }
}
 
export default App;


// import ReactMarkDownDemo from "./common/components/react_mark_down_demo";

// const App = () => {


//   return (
//     <div className="ideaboxes-container ">
//       <div className="ideabox-container">
//         <div className="ideabox-body-container">
//           {/*<img />*/}
//           <div className="ideabox-container">
//             <h2> title </h2>
//             <p>descreption</p>
//           </div>
//         </div>
//       </div>
//       <div className="ideabox-container">
//         <div className="ideabox-body-container">
//           {/*<img />*/}
//           <div className="ideabox-container">
//             <h2> title </h2>
//             <p>descreption</p>
//           </div>
//         </div>
//       </div>
//       <div className="ideabox-container">
//         <div className="ideabox-body-container">
//           {/*<img />*/}
//           <div className="ideabox-container">
//             <h2> title </h2>
//             <p>descreption</p>
//           </div>
//         </div>
//       </div>
//       <div className="ideabox-container">
//         <div className="ideabox-body-container">
//           {/*<img />*/}
//           <div className="ideabox-container">
//             <h2> title </h2>
//             <p>descreption</p>
//           </div>
//         </div>
//       </div>
//       <ReactMarkDownDemo />
//     </div>
//   );
// }

// export default App;
