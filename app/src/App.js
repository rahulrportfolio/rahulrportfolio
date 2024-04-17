
import './App.css';
import {Header, Greeting} from './components';
function App() {
  return (
    <div className="App">
      <Header title="My Dynamic Header" />
        <Greeting/>
    </div>
  );
}

export default App;
