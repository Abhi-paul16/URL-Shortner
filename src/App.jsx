import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { LinkShortner } from './components/LinkShortner';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LinkShortner/>
    </div>
  );
}

export default App;
