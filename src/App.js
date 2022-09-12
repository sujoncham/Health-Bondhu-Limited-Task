import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';

function App() {
  return (
    <div style={{background:'#E9EEF7'}} className="App">
      <Header></Header>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
