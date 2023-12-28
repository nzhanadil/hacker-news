import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import News from './components/News';


function App() {
  return (
    <div className="App">
      <Header text="Hacker News"/>
      <News />
    </div>
  );
}

export default App;
