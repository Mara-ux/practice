import './App.css';
import Header from "./components/Header/Header"
import Main from './components/Main/Main'
import CardRow from "./components/CardRow/CardRow"
import QnA from './components/QnA/QnA';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="body">
      <Header />
      <Main />
      <CardRow />
      <CardRow />
      <CardRow />
      <QnA />
      <Footer />
    </div>
  );
}

export default App ;
