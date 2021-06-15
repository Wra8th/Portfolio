import {BrowserRouter , Route , Switch} from "react-router-dom";
import './index';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
