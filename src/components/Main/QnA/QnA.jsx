import { useState } from 'react';
import "./QnA.module.css"
import s from './QnA.module.css'
import Btn from './Btns/Btn';
import Answer from './Answers/Answer';

let btnInfo = [
    {id: 1, name: "Заказ альбома в период предзаказа"},
    {id: 2, name: "Индивидуальные заказы/поиск карт"},
    {id: 3, name: "Как часто будут вывозы в РФ?"},
    {id: 4, name: "Упаковка"}
]
const answers = [
    "Можно заказать альбом ЛЮБОЙ группы. Если нет поста на стене с набором в коллективку, то можно написать в лс сообщества и уточнить, + можно выбрать любой корейский или японский магазин по своему желанию.",
    "В спец. обсуждении прикрепляете скан/фотографию желаемой карты/альбома, пишете группу/мембера и стоимость, за которую вы готовы приобрести. Не забываем об учётах и доставке. Если вы уже нашли желаемую карту у кор/яп/индо — можете написать в спец. беседу (в чатах группы).",
    "Будет зависеть от количества заказанного стаффа. Инд/фил.адрес — ДОЛГИЙ ВЫВОЗ. Раз в несколько месяцев. Яп/кор/кит.адреса — как только количество/вес достигает нужной цифры,коробка отправляется в РФ напрямую, или через КЗ.",
    "По умолчанию карты в обычном протекторе. Если карта от магазина в ориг.протекторе, то в нём и отправляется. При желании, можете попросить на стр для дс о вскрытии. Картон переплетный."
];

const QnA = (props) => {
    const [activeAnswerIndex, setActiveAnswerIndex] = useState(null);

    const mouseEnter = (i) => {setActiveAnswerIndex(i)}
    const mouseLeave = () => {setActiveAnswerIndex(null)};


    return (
        <section>
            <h2>{props.title}</h2>
            <div className={s.wrapper}>
                <div className={s.btn_wrapper}>
                    {btnInfo.map((b, i) => (
                        <Btn
                            name={b.name}
                            onMouseEnter={() => mouseEnter(i)}
                            onMouseLeave={mouseLeave}
                        />
                    ))}
                </div>
                <div className={s.answers_wrapper}>
                    {answers.map((a, i) => (
                        <Answer 
                            text={a}
                            vis={activeAnswerIndex === i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QnA;