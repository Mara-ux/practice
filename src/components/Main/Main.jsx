import MainSect from './MainSect/MainSect';
import CardRow1 from './CardRows/CardRow1';
import CardRow2 from './CardRows/CardRow2';
import CardRow3 from './CardRows/CardRow3';
import QnA from './QnA/QnA';

const Main = () => {
    return (
        <div>
            <MainSect />
            <CardRow1 title="Хиты продаж" />
            <CardRow2 title="Новинки" />
            <CardRow3 title="Скидки" />
            <QnA title="Частые вопросы" />
        </div>
    );
}

export default Main;