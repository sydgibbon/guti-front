import './App.css';
import './component/Sidebar'
import SideBar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <h1 className='underline text-3xl p-3 bg-secondary-dark-bg'>Hello World!</h1>
    </div>
  );
}

export default App;