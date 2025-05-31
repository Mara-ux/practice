import './App.css';
import Header from "./components/Header/Header"
import Main from './components/Main/Main'
import CardRow1 from "./components/CardRows/CardRow1"
import QnA from './components/QnA/QnA';
import Footer from './components/Footer/Footer';
import CardRow2 from './components/CardRows/CardRow2';
import CardRow3 from './components/CardRows/CardRow3';


const App = () => {
  return (
    <div className="body">
      <Header />
      <Main />
      <CardRow1 title="Хиты продаж" />
      <CardRow2 title="Новинки" />
      <CardRow3 title="Скидки" />
      <QnA title="Частые вопросы" />
      <Footer />
    </div>
  );
}

export default App;
