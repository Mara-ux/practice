import './App.css';
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';
import Shipment from './components/Shipment/Shipment';
import Contacts from './components/Contacts/Contacts';
import Catalog from './components/Catalog/Catalog';

const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path="/main*" element={<Main />} />
          <Route path="/about*" element={<About/>}/>
          <Route path="/shipment*" element={<Shipment/>}/>
          <Route path="/contacts*" element={<Contacts/>}/>
          <Route path="/catalog*" element={<Catalog/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
