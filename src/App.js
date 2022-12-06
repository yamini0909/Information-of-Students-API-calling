
import './App.css';
import AppApi from './AppApi';
import Record from './Record';

function App() {
  return (
    <div className="App">
      <h1>Information about Students</h1>
       <AppApi></AppApi>
    <Record></Record> 
    </div>
  );
}

export default App;
