import './App.css';
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Routes>
          <Route path="/main*" element={<Main />} />
          <Route path="/about*" element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
