import MainSect from './MainSect/MainSect';
import CardRow from './CardRows/CardRow';
import QnA from './QnA/QnA';

const Main = () => {
    return (
        <div>
            <MainSect />
            <CardRow title="Хиты продаж" extraTags="hit"/>
            <CardRow title="Новинки" extraTags="preorder"/>
            <CardRow title="Скидки" extraTags="sale"/>
            <QnA title="Частые вопросы" />
        </div>
    );
}

export default Main;