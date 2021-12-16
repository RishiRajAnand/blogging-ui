import '@patternfly/react-core/dist/styles/base.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import { ListBlog } from './ListBlog';
import { PostBlog } from './PostBlog';

function App() {

  const [wakeUp, setWakeUp] = useState(false);
  return (
    <div className="App">
      <PostBlog onPost={() => { setWakeUp(true) }} />
      <ListBlog wakeUp={wakeUp} />
    </div>
  );
}

export default App;
