import '@patternfly/react-core/dist/styles/base.css';
import { useState } from 'react';
import './App.css';
import { ListBlog } from './ListBlog';
import { PostBlog } from './PostBlog';

function App() {
  const [wakeUp, setWakeUp] = useState(-1);
  function onPostHandler(params) {
    setWakeUp(params);
  }
  return (
    <div className="App">
      <PostBlog onChange={onPostHandler} />
      <ListBlog wakeUp={wakeUp} />
    </div>
  );
}

export default App;
